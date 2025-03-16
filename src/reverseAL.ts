export function reverseAL(element: SceneNode) {
  reverseTextAlignment(element);
  if (
    element &&
    (element.type === "FRAME" ||
      element.type === "COMPONENT" ||
      element.type === "COMPONENT_SET")
  ) {
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
    }
    for (const child of element.children) {
      reverseAL(child);
    }
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
