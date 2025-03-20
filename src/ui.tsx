import { Button, Container, render } from "@create-figma-plugin/ui";
import { emit, on } from "@create-figma-plugin/utilities";
import { h, JSX } from "preact";
import { translateEnglishToHebrew } from "./translation";
import "./ui.css";

function Plugin() {
  function handleReverseLayoutAndTranslateButtonClick() {
    emit("RTL");
  }

  on("TEXTS", async (texts: Record<string, string>[]) => {
    for (const textObject of texts) {
      const key = Object.keys(textObject)[0];
      const value = Object.values(textObject)[0] as string;

      const translation = await translateEnglishToHebrew(value);
      textObject[key] = translation.text;
    }
    emit("TRANSLATED", texts);
  });

  return (
    <Container
      space="medium"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "12px",
      }}
    >
      <Button
        fullWidth
        onClick={handleReverseLayoutAndTranslateButtonClick}
        style={{ height: "100px" }}
      >
        <span style={{ fontSize: "32px" }}>RTL</span>
      </Button>
    </Container>
  );
}

export default render(Plugin);
