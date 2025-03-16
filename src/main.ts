import { emit, on, showUI } from "@create-figma-plugin/utilities";
import { reverseAL } from "./reverseAL";
import { getTextElements } from "./getTextElements";
import { translateWithOpenAi } from "./aiTranslation";

export default async function () {
  on("MIRROR", async () => await handleSelection("MIRROR"));
  on("TRANSLATE", async () => await handleSelection("TRANSLATE"));
  on("TRANSLATED", async (data) => await handleSelection("TRANSLATED", data));
  on("AI_TRANSLATE", async () => await handleSelection("AI_TRANSLATE"));
  on(
    "AI_TRANSLATE_AND_REVERSE",
    async () => await handleSelection("AI_TRANSLATE_AND_REVERSE")
  );

  showUI({
    height: 220,
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

async function translateTextElements(textElements: TextNode[]) {
  const textObjectsToTranslate = textElements.map((node) => ({
    [node.id]: node.characters,
  }));
  const translatedElements = await translateWithOpenAi(textObjectsToTranslate);

  for (const element of translatedElements) {
    const [key, value] = Object.entries(element)[0];
    const foundNode = textElements.find((element) => element.id === key);
    if (foundNode) {
      foundNode.characters = value as string;
    }
  }
}

async function handleSelection(
  action:
    | "MIRROR"
    | "TRANSLATE"
    | "TRANSLATED"
    | "AI_TRANSLATE"
    | "AI_TRANSLATE_AND_REVERSE",
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
    case "AI_TRANSLATE":
      await translateTextElements(textElements);
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
    case "AI_TRANSLATE_AND_REVERSE":
      for (const node of selection) {
        reverseAL(node);
      }
      await translateTextElements(textElements);
      break;
  }
}
