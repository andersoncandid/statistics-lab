import { validateArray, getMean, getMedian } from "./stat.js";

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

describe("Statistics", () => {
  test("Mean", () => {
    expect(getMean([1, 2, 3, 4, 5])).toBe(3);
  });
  test("Median: array of ODD size", () => {
    expect(getMedian([8, 9, 5, 1, 6])).toBe(6);
  });
  test("Median: array of EVEN size", () => {
    expect(getMedian([8, 9, 5, 1])).toBe(6.5);
  });
});
