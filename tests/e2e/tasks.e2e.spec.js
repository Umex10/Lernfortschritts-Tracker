import { test, expect } from "@playwright/test";
import { STATUS } from "../../src/constants/status.js";

const statuses = [STATUS.TODO, STATUS.IN_PROGRESS, STATUS.DONE];

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
  // Clear localStorage to prevent stale test data from interfering
  await page.evaluate(() => localStorage.clear());
});

test(`initialized content from module.json`, async ({ page }) => {
  // Wait for initial list to load
  await page.waitForSelector('#tasks li[data-testid^="task-"]', { timeout: 10000 });

  // Select only <li> elements, not their children
  const allTasks = page.locator('#tasks > li[data-testid^="task-"]');
  const count = await allTasks.count();

  expect(count).toBeGreaterThan(0);
// Reload page to fetch fresh data from module.json
  await page.reload();
})

for (const status of statuses) {
  test(`filter '${status}' tasks shows only '${status}' tasks`, async ({ page }) => {

    // Reload page to fetch fresh data from module.json
    await page.reload();

    // Wait for initial list to load
    await page.waitForSelector('#tasks li[data-testid^="task-"]', { timeout: 10000 });

    // Select the status filter
    await page.selectOption('[data-testid="status-filter"]', status);

    // Wait briefly for the event handler to update the list
    await page.waitForTimeout(500);

    // Select only <li> elements, not their children
    const allTasks = page.locator('#tasks > li[data-testid^="task-"]');
    const count = await allTasks.count();

    // Verify that at least one task is displayed
    expect(count).toBeGreaterThan(0);

    // Check each individual task
    for (let i = 0; i < count; i++) {
      const task = allTasks.nth(i);
      const statusElement = task.locator('[data-testid="task-status"]');

      const actualStatus = (await statusElement.textContent())?.trim();

      await expect(actualStatus).toBe(status);
    }
  });
}

