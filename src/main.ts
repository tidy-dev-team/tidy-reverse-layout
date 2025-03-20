import { emit, on, showUI } from "@create-figma-plugin/utilities";
import { reverseAL } from "./reverseAL";
import { getTextElements } from "./getTextElements";

export default async function () {
  on("MIRROR", async () => await handleSelection("MIRROR"));
  on("TRANSLATE", async () => await handleSelection("TRANSLATE"));
  on("TRANSLATED", async (data) => await handleSelection("TRANSLATED", data));

  showUI({
    height: 148,
    width: 280,
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

async function handleSelection(
  action: "MIRROR" | "TRANSLATE" | "TRANSLATED",
  data?: any
) {
  const selection = validateSelection();
  if (!selection) return;

  const textElements = getTextElements(selection);

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
