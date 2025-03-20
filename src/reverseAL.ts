import { getRtlInstance } from "./getRtlInstance";
import { hasAlphaNumericText } from "./utils/hasAlphaNumericText";
import { getChildIndex } from "./utils/getChildIndex";

export function reverseAL(element: SceneNode) {
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
      const rtlInstance = getRtlInstance(element);
      if (rtlInstance) {
        const index = getChildIndex(element);
        if (index) {
          element.parent!.insertChild(index + 1, rtlInstance);
          element.remove();
        }
      }
    }
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
