import { renderHook } from "@testing-library/react";
import useMounted from "./useMounted";

describe("useMounted", () => {
  it("should mounted", () => {
    const { result } = renderHook(() => useMounted());
    expect(result.current).toBe(true);
  });
});
