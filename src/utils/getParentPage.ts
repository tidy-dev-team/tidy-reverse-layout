export function getParentPage(node: BaseNode): PageNode | null {
  if (node.type === "PAGE") {
    return node as PageNode;
  }

  if (!node.parent) {
    return null;
  }

  return getParentPage(node.parent);
}
