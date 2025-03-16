import { emit, on, showUI } from "@create-figma-plugin/utilities";
import { reverseAL } from "./reverseAL";
import { getTextElements } from "./getTextElements";
import { text } from "stream/consumers";
import { translateWithOpenAi } from "./aiTranslation";

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

async function handleSelection(
  action: "MIRROR" | "TRANSLATE" | "TRANSLATED" | "AI_TRANSLATE",
  data?: any
) {
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
      const textObjects = textElements.map((node) => {
        return { [node.id]: node.characters };
      });
      console.log("textObjects", textObjects);
      emit("TEXTS", textObjects);
      break;
    case "AI_TRANSLATE":
      const textObjectsArray = textElements.map((node) => {
        return { [node.id]: node.characters };
      });
      const translatedElements = await translateWithOpenAi(textObjectsArray);
      for (const element of translatedElements) {
        const key = Object.keys(element)[0];
        const value = Object.values(element)[0];

        const foundNode = textElements.find((element) => element.id === key);
        if (foundNode) {
          foundNode.characters = value as string;
        }
      }
      break;
    case "TRANSLATED":
      for (const textObject of data) {
        const key = Object.keys(textObject)[0];
        const value = Object.values(textObject)[0];

        const foundNode = textElements.find((element) => element.id === key);
        if (foundNode) {
          foundNode.characters = value as string;
        }
      }

      break;
  }
}

export default async function () {
  on("MIRROR", () => handleSelection("MIRROR"));
  on("TRANSLATE", () => handleSelection("TRANSLATE"));
  on("TRANSLATED", (data) => handleSelection("TRANSLATED", data));
  on("AI_TRANSLATE", () => handleSelection("AI_TRANSLATE"));

  showUI({
    height: 200,
    width: 240,
  });
}
