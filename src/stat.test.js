import { values, generateNumbers } from "./stat.js";

describe("Array processing", () => {
  test("Non-empty array", () => {
    expect(values).not.toHaveLength(0);
  });
  test("Containing only numbers", () => {
    expect(values.every((elem) => typeof elem === "number")).toBe(true);
  });
  test("Size less than or equal to 100", () => {
    expect(values).not.toHaveLength(4);
  });
});
