import "@testing-library/jest-dom";
import "vitest";
import "vitest-matchmedia-mock";
import "vitest-canvas-mock";

vi.mock("use-resize-observer", () => ({
  __esModule: true,
  default: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  }))
}));

class ResizeObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

// Mock global ResizeObserver
global.ResizeObserver = ResizeObserverMock as any;
