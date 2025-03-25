import { on, showUI } from "@create-figma-plugin/utilities";
import { reverseAL } from "./reverseAL";
import { getTextElements, containsEnglishCharacters } from "./getTextElements";
import { translateEnglishToHebrew } from "./translation";

export default async function () {
  on("RTL", async () => await handleSelection());

  showUI({
    height: 140,
    width: 240,
  });
}

function validateSelection(): readonly SceneNode[] | null {
  const selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.notify("Please select at least one element");
    return null;
  }
  return selection;
}

async function handleSelection() {
  const selection = validateSelection();
  if (!selection) return;

  const clonedSelection = [];

  //duplicate selection
  for (const node of selection) {
    if (
      node.type === "FRAME" ||
      node.type === "COMPONENT" ||
      node.type === "COMPONENT_SET"
    ) {
      const clonedNode = node.clone();
      clonedNode.name = node.name + "-RTL";
      clonedNode.x = node.x + node.width + 20;
      clonedSelection.push(clonedNode);
    }
  }

  clonedSelection.forEach((section) => reverseAL(section));

  const textElements = getTextElements(clonedSelection);

  for (const textNode of textElements) {
    if (typeof textNode.fontName !== "symbol") {
      // Only translate if the text contains English characters
      if (containsEnglishCharacters(textNode.characters)) {
        await figma.loadFontAsync({
          family: textNode.fontName.family,
          style: textNode.fontName.style,
        });
        const translation = await translateEnglishToHebrew(textNode.characters);
        textNode.characters = translation.text;
      }
    }
  }
}
