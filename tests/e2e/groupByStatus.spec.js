import { test, expect } from "@playwright/test";
import { modules } from "../fixtures/dummyData.js";
import { STATUS } from "../../public/constants/status.js";
import { groupByStatus } from "../../public/app.js";

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

  // checks if the id's match
  expect(grouped[STATUS.TODO].map(m => m.id)).toEqual([7,8,9]);
  expect(grouped[STATUS.IN_PROGRESS].map(m => m.id)).toEqual([1, 2, 3]);
  expect(grouped[STATUS.DONE].map(m => m.id)).toEqual([4, 5, 6]);
});
