export function reverseAL(element: SceneNode) {
  if (
    element &&
    (element.type === "FRAME" || element.type === "COMPONENT") &&
    element.layoutMode === "HORIZONTAL"
  ) {
    const children = [...element.children].reverse();
    for (let i = 0; i < children.length; i++) {
      element.insertChild(i, children[i]);
    }
    // Recursively process children
    for (const child of element.children) {
      reverseAL(child);
    }
  }
}
