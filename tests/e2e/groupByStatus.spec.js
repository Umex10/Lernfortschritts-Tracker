import { test, expect } from "@playwright/test";
import { modules } from "../fixtures/dummyData.js";
import { STATUS } from "../../src/constants/status.js";
import { groupByStatus } from "../../src/utils/grouping.js";

test("groupByStatus correctly groups modules", async () => {
  const grouped = groupByStatus(modules);

  // checks if all arrays exist
  expect(grouped[STATUS.TODO]).toBeDefined();
  expect(grouped[STATUS.IN_PROGRESS]).toBeDefined();
  expect(grouped[STATUS.DONE]).toBeDefined();

  // checks the length of the arrays
  expect(grouped[STATUS.TODO].length).toBe(3);
  expect(grouped[STATUS.IN_PROGRESS].length).toBe(3);
  expect(grouped[STATUS.DONE].length).toBe(3);

});
