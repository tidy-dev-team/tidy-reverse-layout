import { getRtlInstance } from "./getRtlInstance";
import { hasAlphaNumericText } from "./utils/hasAlphaNumericText";
import { getChildIndex } from "./utils/getChildIndex";

export function reverseAL(element: SceneNode) {
  try {
    reverseTextAlignment(element);
    if (
      element &&
      (element.type === "FRAME" ||
        element.type === "COMPONENT" ||
        element.type === "COMPONENT_SET")
    ) {
      reverseContent(element);
    } else if (element && element.type === "INSTANCE") {
      if (hasAlphaNumericText(element)) {
        try {
          const rtlInstance = getRtlInstance(element);
          if (!rtlInstance) {
            // This should not happen anymore since getRtlInstance now throws errors
            // but keeping as a fallback
            figma.closePlugin(
              `No RTL version found for ${element.name}. Please create one.`
            );
            return;
          }

          const index = getChildIndex(element);
          if (index !== null) {
            element.parent!.insertChild(index + 1, rtlInstance);
            element.remove();
          }
        } catch (error) {
          // Propagate error to main.ts to handle plugin closing
          throw error;
        }
      }
    }
  } catch (error) {
    // Propagate error up to main.ts
    throw error;
  }
}

function reverseContent(element: FrameNode | ComponentSetNode | ComponentNode) {
  if (element.layoutMode === "HORIZONTAL") {
    if (element.primaryAxisAlignItems === "MIN") {
      element.primaryAxisAlignItems = "MAX";
    } else if (element.primaryAxisAlignItems === "MAX") {
      element.primaryAxisAlignItems = "MIN";
    }
    const children = [...element.children].reverse();
    for (let i = 0; i < children.length; i++) {
      element.insertChild(i, children[i]);
    }
  } else {
    if (element.counterAxisAlignItems === "MIN") {
      element.counterAxisAlignItems = "MAX";
    } else if (element.counterAxisAlignItems === "MAX") {
      element.counterAxisAlignItems = "MIN";
    }
  }
  for (const child of element.children) {
    reverseAL(child);
  }
}

export async function reverseTextAlignment(element: SceneNode) {
  if (!element) return;

  if (element.type === "TEXT") {
    await loadFonts([element]);
    if (element.textAlignHorizontal === "LEFT") {
      element.textAlignHorizontal = "RIGHT";
    } else if (element.textAlignHorizontal === "RIGHT") {
      element.textAlignHorizontal = "LEFT";
    }
  }
}

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
