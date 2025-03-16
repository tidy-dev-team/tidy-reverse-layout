function containsAlphabeticalCharacters(text: string): boolean {
  return /[a-zA-Z\u0590-\u05FF]/.test(text); // Includes both English and Hebrew alphabets
}

export function getTextElements(selection: readonly SceneNode[]) {
  const textElements: TextNode[] = [];

  for (const node of selection) {
    if (node.type === "COMPONENT" || node.type === "FRAME") {
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
