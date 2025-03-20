import {
  Button,
  Columns,
  Container,
  render,
  Text,
  VerticalSpace,
  Checkbox,
} from "@create-figma-plugin/ui";
import { emit, on } from "@create-figma-plugin/utilities";
import { h, JSX } from "preact";
import { useState } from "preact/hooks";
import {
  translateEnglishToHebrew,
  translateHebrewToEnglish,
} from "./translation";
import { text } from "stream/consumers";
import "./ui.css";

function Plugin() {
  // const [isTranslate, setIsTranslate] = useState(false);

  function handleReverseLayoutAndTranslateButtonClick() {
    emit("TRANSLATE");
    emit("MIRROR");
  }

  on("TEXTS", async (texts: Record<string, string>[]) => {
    for (const textObject of texts) {
      const key = Object.keys(textObject)[0];
      const value = Object.values(textObject)[0] as string;
      //we don't want to translate 1-letter text elements
      if (value.length > 1) {
        const translation = await translateEnglishToHebrew(value);
        textObject[key] = translation.text;
      }
    }
    emit("TRANSLATED", texts);
  });

  function CheckboxElement({
    value,
    setValue,
    label,
  }: {
    value: boolean;
    setValue: (newValue: boolean) => void;
    label: string;
  }) {
    function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
      const newValue = event.currentTarget.checked;
      console.log(newValue);
      setValue(newValue);
    }
    return (
      <Checkbox onChange={handleChange} value={value}>
        <Text>{label}</Text>
      </Checkbox>
    );
  }

  return (
    <Container
      space="medium"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "12px",
        paddingLeft: "20px",
      }}
    >
      <VerticalSpace space="small" />
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Button
          fullWidth
          onClick={handleReverseLayoutAndTranslateButtonClick}
          style={{ height: "100px" }}
        >
          <span style={{ fontSize: "32px" }}>RTL</span>
        </Button>
      </div>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
