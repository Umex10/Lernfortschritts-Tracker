import { test, expect } from "@playwright/test";
import { STATUS } from "../../src/constants/status.js";
import { testModules } from "../fixtures/dummyData.js";

// These tests focus specifically on status change persistence
// and the status history (archive) rendering.

test.describe("Task status persistence and history", () => {
  test.beforeEach(async ({ page }) => {
    // Intercept the module.json request and respond with test data
    await page.route("**/module.json", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(testModules),
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

  test("status change persists after page reload", async ({ page }) => {
    await page.waitForSelector('#tasks li[data-testid^="task-"]', {
      timeout: 10000,
    });

    const firstTask = page.locator('#tasks > li[data-testid^="task-"]').first();

    // Open the details element to make the select visible
    const details = firstTask.locator("details.task-card");
    await details.click();

    const statusSelect = firstTask.getByTestId("task-status");

    const originalStatus = await statusSelect.inputValue();
    const newStatus =
      originalStatus === STATUS.TODO ? STATUS.IN_PROGRESS : STATUS.TODO;

    await statusSelect.selectOption(newStatus);
    await page.waitForTimeout(300);

    await expect(statusSelect).toHaveValue(newStatus);
    const saveButton = firstTask.locator("button.task-save");
    await saveButton.click();
    await page.waitForTimeout(300);
    // Reload page and ensure the status is still the new one
    await page.reload();
    await page.waitForSelector('#tasks li[data-testid^="task-"]', {
      timeout: 10000,
    });

    const firstTaskAfter = page
      .locator('#tasks > li[data-testid^="task-"]')
      .first();

    // Open the details element again after reload
    const detailsAfter = firstTaskAfter.locator("details.task-card");
    await detailsAfter.click();

    const statusAfterReload = await firstTaskAfter
      .getByTestId("task-status")
      .inputValue();

    expect(statusAfterReload).toBe(newStatus);
  });

  test("status history is created and persists after reload", async ({
    page,
  }) => {
    await page.waitForSelector('#tasks li[data-testid^="task-"]', {
      timeout: 10000,
    });

    const firstTask = page.locator('#tasks > li[data-testid^="task-"]').first();

    // Open the details element to make the select visible
    const details = firstTask.locator("details.task-card");
    await details.click();

    const statusSelect = firstTask.getByTestId("task-status");

    // Change status once to create a history entry
    await statusSelect.selectOption(STATUS.IN_PROGRESS);
    await page.waitForTimeout(300);

    // Click the Save button to trigger DOM update with history
    const saveButton = firstTask.locator("button.task-save");
    await saveButton.click();
    await page.waitForTimeout(300);

    const historyDetails = firstTask.locator(".task-archive");
    await expect(historyDetails).toBeAttached();

    const summary = historyDetails.locator("summary");
    const summaryText = (await summary.textContent())?.trim();
    expect(summaryText).toContain("History");

    // Reload and ensure the history is still present
    await page.reload();
    await page.waitForSelector('#tasks li[data-testid^="task-"]', {
      timeout: 10000,
    });

    const firstTaskAfter = page
      .locator('#tasks > li[data-testid^="task-"]')
      .first();

    // Open the details element again after reload
    const detailsAfter = firstTaskAfter.locator("details.task-card");
    await detailsAfter.click();

    const historyAfterReload = firstTaskAfter.locator(".task-archive");
    await expect(historyAfterReload).toBeAttached();
  });
});
