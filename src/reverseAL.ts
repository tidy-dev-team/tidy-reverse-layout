export function reverseAL(element: SceneNode) {
  reverseTextAlignment(element);
  if (element && (element.type === "FRAME" || element.type === "COMPONENT")) {
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
    // Recursively process children
    for (const child of element.children) {
      reverseAL(child);
    }
  }
}

export function reverseTextAlignment(element: SceneNode) {
  if (!element) return;

  if (element.type === "TEXT") {
    if (element.textAlignHorizontal === "LEFT") {
      element.textAlignHorizontal = "RIGHT";
    } else if (element.textAlignHorizontal === "RIGHT") {
      element.textAlignHorizontal = "LEFT";
    }
  }

  // // Process children if the element is a container
  // if ("children" in element) {
  //   for (const child of element.children) {
  //     reverseTextAlignment(child);
  //   }
  // }
}
