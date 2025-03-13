import { on, showUI } from "@create-figma-plugin/utilities";
import { reverseAL } from "./reverseAL";

export default function () {
  on("MIRROR", () => {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.notify("Please select at least one elemnt");
      return;
    }
    for (const node of selection) {
      reverseAL(node);
    }
  });

  on("TRANSLATE", () => {
    console.log("TRANSLATE");
  });

  showUI({
    height: 137,
    width: 240,
  });
}
