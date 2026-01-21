import { setMode } from "@stencil/core";

// any setup

export function initialize() {
  setMode((el) => {
    return el.getAttribute("mode") || (el as any).mode || "light";
  });
}
