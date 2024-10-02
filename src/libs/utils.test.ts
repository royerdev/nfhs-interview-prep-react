import {
  capitalizeFirstLetterOfEachWord,
  formatDateTimeToLocal,
} from "./utils";

describe("capitalizeFirstLetterOfEachWord", () => {
  it("capitalizes the first letter of each word", () => {
    const result = capitalizeFirstLetterOfEachWord("hello world");
    expect(result).toBe("Hello World");
  });

  it("handles single word strings", () => {
    const result = capitalizeFirstLetterOfEachWord("hello");
    expect(result).toBe("Hello");
  });

  it("handles strings with mixed case", () => {
    const result = capitalizeFirstLetterOfEachWord("hElLo WoRLD");
    expect(result).toBe("Hello World");
  });

  it("handles strings with extra spaces", () => {
    const result = capitalizeFirstLetterOfEachWord("  hello   world  ");
    expect(result).toBe("Hello World");
  });

  it("returns an empty string if input is empty", () => {
    const result = capitalizeFirstLetterOfEachWord("");
    expect(result).toBe("");
  });
});

describe("formatDateTimeToLocal", () => {
  it("formats a valid ISO date string into local date and time", () => {
    const date = "2024-10-02T02:44:08.470Z";
    const result = formatDateTimeToLocal(date);
    const expectedDate = new Date(date).toLocaleDateString("en-US");
    const expectedTime = new Date(date).toLocaleTimeString("en-US");
    expect(result).toBe(`${expectedDate} ${expectedTime}`);
  });

  it("formats another valid ISO date string correctly", () => {
    const date = "2023-11-15T10:20:30.000Z";
    const result = formatDateTimeToLocal(date);
    const expectedDate = new Date(date).toLocaleDateString("en-US");
    const expectedTime = new Date(date).toLocaleTimeString("en-US");
    expect(result).toBe(`${expectedDate} ${expectedTime}`);
  });

  it('returns "Invalid Date" for invalid date string', () => {
    const date = "invalid-date";
    const result = formatDateTimeToLocal(date);
    expect(result).toBe("Invalid Date Invalid Date");
  });
});
