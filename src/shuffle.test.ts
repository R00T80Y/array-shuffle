import { describe, expect, it } from "vitest";

import { shuffle } from "./index";

describe("Whatever", () => {
  it("Should pass CI", () => {
    expect(shuffle([1])).toEqual([1]);

    expect(shuffle([3, 2, 1])).toContain(1);
    expect(shuffle([3, 2, 1])).toContain(2);
    expect(shuffle([3, 2, null])).toContain(3);
  });
});
