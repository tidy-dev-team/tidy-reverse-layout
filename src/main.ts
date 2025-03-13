import { on, showUI } from "@create-figma-plugin/utilities";
import { reverseAL } from "./reverseAL";
import { getTextElements } from "./getTextElements";
import { text } from "stream/consumers";

async function loadFonts(textNodes: TextNode[]) {
  const fonts = new Set(
    textNodes.map((node) => {
      const fontName = node.fontName as FontName;
      return {
        family: fontName.family,
        style: fontName.style,
      };
    })
  );

  for (const font of fonts) {
    await figma.loadFontAsync(font);
  }
}

function validateSelection(): readonly SceneNode[] | null {
  const selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.notify("Please select at least one element");
    return null;
  }
  return selection;
}

async function handleSelection(action: "MIRROR" | "TRANSLATE") {
  const selection = validateSelection();
  if (!selection) return;

  const textElements = getTextElements(selection);
  if (textElements.length > 0) {
    await loadFonts(textElements);
  }

  switch (action) {
    case "MIRROR":
      for (const node of selection) {
        reverseAL(node);
      }
      break;
    case "TRANSLATE":
      console.log("textElements", textElements);
      break;
  }
}

export default async function () {
  on("MIRROR", () => handleSelection("MIRROR"));
  on("TRANSLATE", () => handleSelection("TRANSLATE"));

  showUI({
    height: 137,
    width: 240,
  });
}
