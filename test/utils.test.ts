import { toUpperCase } from "../src/utils";

describe("Utils test suite", () => {
  it("should return upper", () => {
    const result = toUpperCase("abc");

    expect(result).toBe("ABC");
  });
});
