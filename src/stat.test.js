import { validateArray } from "./stat.js";

describe("Validate Array", () => {
  test("Array not empty", () => {
    expect(() => validateArray([])).toThrow(Error);
  });
  test("Array size max 100", () => {
    let arr = Array.from({ length: 101 }, (i) => i + 1);
    expect(() => validateArray(arr)).toThrow(Error);
  });
  test("Array with only numbers", () => {
    expect(() => validateArray(["test"])).toThrow(Error);
  });
  test("Array without negative numbers", () => {
    expect(() => validateArray([-1, -5])).toThrow(Error);
  });
});
