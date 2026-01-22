import { test, expect } from "@playwright/test";
import { modules } from "../fixtures/dummyData.js";
import { STATUS } from "../../src/constants/status.js";
import { groupByStatus } from "../../src/utils/grouping.js";

test("groupByStatus correctly groups modules", () => {
  const grouped = groupByStatus(modules);

  // checks if they the array has the value set
  expect(grouped).toHaveProperty(STATUS.TODO);
  expect(grouped).toHaveProperty(STATUS.IN_PROGRESS);
  expect(grouped).toHaveProperty(STATUS.DONE);

  for (const task of grouped[STATUS.TODO]) {
    expect(task.status).toBe(STATUS.TODO);
  }

  for (const task of grouped[STATUS.IN_PROGRESS]) {
    expect(task.status).toBe(STATUS.IN_PROGRESS);
  }

  for (const task of grouped[STATUS.DONE]) {
    expect(task.status).toBe(STATUS.DONE);
  }

  // Will check if a test went missing
  const totalGrouped =
    grouped[STATUS.TODO].length +
    grouped[STATUS.IN_PROGRESS].length +
    grouped[STATUS.DONE].length;

  expect(totalGrouped).toBe(modules.length);
});
