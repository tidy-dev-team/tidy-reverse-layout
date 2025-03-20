export function getChildIndex(node: SceneNode): number | null {
  if (!node.parent || !("children" in node.parent)) {
    return null;
  }

  return node.parent.children.indexOf(node);
}
