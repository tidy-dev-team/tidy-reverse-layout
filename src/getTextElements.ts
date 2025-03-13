export function getTextElements(selection: readonly SceneNode[]) {
  const textElements: TextNode[] = [];

  for (const node of selection) {
    if (node.type === "COMPONENT" || node.type === "FRAME") {
      const texts = node.findAllWithCriteria({
        types: ["TEXT"],
      });
      textElements.push(...texts);
    } else if (node.type === "TEXT") {
      textElements.push(node);
    }
  }
  return textElements;
}
