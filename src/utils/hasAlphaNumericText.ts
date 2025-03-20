export function hasAlphaNumericText(node: BaseNode): boolean {
  if (node.type === "TEXT") {
    return /[a-zA-Z0-9]/.test(node.characters);
  }

  if ("children" in node) {
    for (const child of node.children) {
      if (hasAlphaNumericText(child)) {
        return true;
      }
    }
  }

  return false;
}
