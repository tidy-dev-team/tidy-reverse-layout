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
  try {
    const selection = validateSelection();
    if (!selection) return;

    const clonedSelection = [];

    // Duplicate selection
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

    // Process each cloned element
    try {
      for (const section of clonedSelection) {
        reverseAL(section);
      }
    } catch (error) {
      // Delete any created RTL elements if error occurs
      clonedSelection.forEach(node => node.remove());
      
      // Close plugin with clear error message
      if (error instanceof Error) {
        figma.closePlugin(`Error creating RTL version: ${error.message}`);
      } else {
        figma.closePlugin(`Error creating RTL version: RTL component not found`);
      }
      return;
    }

    // Translate text elements
    const textElements = getTextElements(clonedSelection);

    for (const textNode of textElements) {
      if (typeof textNode.fontName !== "symbol") {
        // Only translate if the text contains English characters
        if (containsEnglishCharacters(textNode.characters)) {
          try {
            await figma.loadFontAsync({
              family: textNode.fontName.family,
              style: textNode.fontName.style,
            });
            const translation = await translateEnglishToHebrew(textNode.characters);
            textNode.characters = translation.text;
          } catch (error) {
            // Continue with other text elements if one fails
            console.error(`Error translating text: ${textNode.characters}`, error);
            figma.notify(`Error translating "${textNode.characters.substring(0, 20)}${textNode.characters.length > 20 ? '...' : ''}"`, { timeout: 2000 });
          }
        }
      }
    }
    
    figma.notify("RTL conversion completed successfully", { timeout: 2000 });
  } catch (error) {
    // Handle any unexpected errors
    if (error instanceof Error) {
      figma.closePlugin(`Unexpected error: ${error.message}`);
    } else {
      figma.closePlugin(`Unexpected error occurred`);
    }
  }
}
