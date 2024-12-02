import { renderHook } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import MatchMediaMock from "vitest-matchmedia-mock";
import useMediaQuery from "./useMediaQuery";

describe("useMediaQuery", () => {
  let matchMedia: MatchMediaMock;

  beforeEach(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it("should match media query", () => {
    // Set up the mock to match the media query
    matchMedia.useMediaQuery("(min-width: 768px)");

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));

    // The hook should return true immediately if the media query matches
    expect(result.current).toBe(true);
  });

  it("should not match media query", () => {
    // Set up the mock to not match the media query
    matchMedia.useMediaQuery("(min-width: 1024px)");

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));

    // The hook should return false immediately if the media query doesn't match
    expect(result.current).toBe(false);
  });
});
