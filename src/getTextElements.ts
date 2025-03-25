function containsAlphabeticalCharacters(text: string): boolean {
  return /[a-zA-Z\u0590-\u05FF]/.test(text);
}

export function containsEnglishCharacters(text: string): boolean {
  return /[a-zA-Z]/.test(text); // Only checks for English alphabet
}

export function getTextElements(selection: readonly SceneNode[]) {
  const textElements: TextNode[] = [];

  for (const node of selection) {
    if (
      node.type === "COMPONENT" ||
      node.type === "FRAME" ||
      node.type === "COMPONENT_SET" ||
      node.type === "INSTANCE"
    ) {
      const texts = node.findAllWithCriteria({
        types: ["TEXT"],
      });
      textElements.push(
        ...texts.filter((text) =>
          containsAlphabeticalCharacters(text.characters)
        )
      );
    } else if (
      node.type === "TEXT" &&
      containsAlphabeticalCharacters(node.characters)
    ) {
      textElements.push(node);
    }
  }
  return textElements;
}
