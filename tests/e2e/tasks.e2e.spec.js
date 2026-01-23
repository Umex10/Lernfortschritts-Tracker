/**
 * E2E tests for task list initialization and filtering (status, search, combined).
 */
import { test, expect } from "@playwright/test";
import { STATUS } from "../../src/constants/status.js";
import { testModules } from "../fixtures/dummyData.js";
import { testModules } from "../fixtures/dummyData.js";

const statuses = [STATUS.TODO, STATUS.IN_PROGRESS, STATUS.DONE];
const ValidSearches = ["Economics", "Business", "German"];
const InvalidSearches = ["X", "Bike", "22"];
const validCombinations = [
  {
    status: STATUS.DONE,
    search: "Economics",
  },
  {
    status: STATUS.IN_PROGRESS,
    search: "Business",
  },
  {
    status: STATUS.TODO,
    search: "Web",
  },
];

const invalidCombinations = [
  {
    status: STATUS.IN_PROGRESS,
    search: "Economics",
  },
  {
    status: STATUS.TODO,
    search: "Business",
  },
  {
    status: STATUS.TODO,
    search: "German",
  },
];

test.describe("Task list filtering", () => {
  test.beforeEach(async ({ page }) => {
    // Intercept the module.json request and respond with test data
    await page.route('**/module.json', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(testModules)
      });
    });

    await page.goto("http://localhost:3000");
    // Clear localStorage and inject test data
    await page.evaluate((modules) => {
      localStorage.clear();
      localStorage.setItem("moduleData", JSON.stringify(modules));
    }, testModules);
    
    // Reload to trigger the app with test data
    await page.reload();
  });

  test.describe("Initialization", () => {
    test("initialized content from module.json", async ({ page }) => {
      await page.waitForSelector('#tasks li[data-testid^="task-"]', { timeout: 10000 });

      const allTasks = page.locator('#tasks > li[data-testid^="task-"]');
      const count = await allTasks.count();

      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe("Status filter", () => {
    for (const status of statuses) {
      test(`filter '${status}' tasks shows only '${status}' tasks`, async ({ page }) => {
        await page.waitForSelector('#tasks li[data-testid^="task-"]', { timeout: 10000 });

        await page.getByTestId("status-filter").selectOption(status);
        await page.waitForTimeout(500);

        const allTasks = page.locator('#tasks > li[data-testid^="task-"]');
        const count = await allTasks.count();

        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
          const task = allTasks.nth(i);
          const statusElement = task.getByTestId("task-status");
          const actualStatus = await statusElement.inputValue();
          expect(actualStatus).toBe(status);
        }
      });
    }
  });

  test.describe("Search filter – valid input", () => {
    for (const search of ValidSearches) {
      test(`filter '${search}' tasks shows only matching tasks`, async ({ page }) => {
        await page.waitForSelector('#tasks li[data-testid^="task-"]', { timeout: 10000 });

        const searchFilter = page.getByTestId("search-filter");
        await searchFilter.fill(search.toLowerCase());

        await page.waitForTimeout(500);

        const allTasks = page.locator('#tasks > li[data-testid^="task-"]');
        const count = await allTasks.count();

        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
          const task = allTasks.nth(i);
          const title = task.getByTestId("task-title");

          const actualTitle = (await title.textContent())?.trim().toLowerCase();
          expect(actualTitle).toContain(search.toLowerCase());
        }
      });
    }
  });

  test.describe("Search filter – invalid input", () => {
    for (const search of InvalidSearches) {
      test(`filter '${search}' returns no tasks`, async ({ page }) => {
        await page.waitForSelector('#tasks li[data-testid^="task-"]', { timeout: 10000 });

        const searchFilter = page.getByTestId("search-filter");
        await searchFilter.fill(search.toLowerCase());

        await page.waitForTimeout(500);

        const allTasks = page.locator('#tasks > li[data-testid^="task-"]');
        const count = await allTasks.count();

        expect(count).toBe(0);
      });
    }
  });

  test.describe("Search filter + Status Filter - Valid Cases", () => {
    for (const combination of validCombinations) {
      test(`Search and status should work simultaneously with: ${combination.search} + ${combination.status}`, async ({ page }) => {
        await page.waitForSelector('#tasks li[data-testid^="task-"]', { timeout: 10000 });

        await page.getByTestId("search-filter").fill(combination.search.toLowerCase());
        await page.getByTestId("status-filter").selectOption(combination.status);
        
        await page.waitForTimeout(500);

        const allTasks = page.locator('#tasks > li[data-testid^="task-"]');
        const count = await allTasks.count();

        expect(count).toBeGreaterThan(0);
      });
    }
  });

  test.describe("Search filter + Status Filter - Invalid Cases", () => {
    for (const combination of invalidCombinations) {
      test(`Search and status should return empty for: ${combination.search} + ${combination.status}`, async ({ page }) => {
        await page.waitForSelector('#tasks li[data-testid^="task-"]', { timeout: 10000 });

        await page.getByTestId("search-filter").fill(combination.search.toLowerCase());
        await page.getByTestId("status-filter").selectOption(combination.status);
        
        await page.waitForTimeout(500);

        const allTasks = page.locator('#tasks > li[data-testid^="task-"]');
        const count = await allTasks.count();

        expect(count).toBe(0);
      });
    }
  });

});