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
  const [isTranslate, setIsTranslate] = useState(false);

  function handleReverseLayoutAndTranslateButtonClick() {
    emit("TRANSLATE");
    emit("MIRROR");
  }

  function handleTranslateClick() {
    emit("TRANSLATE");
  }

  function handleAiTranslateClick() {
    emit("AI_TRANSLATE");
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
      <VerticalSpace space="extraLarge" />
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Button fullWidth onClick={handleReverseLayoutAndTranslateButtonClick}>
          Reverse layout & translate
        </Button>
        <Button fullWidth onClick={handleTranslateClick} secondary>
          Google Translate
        </Button>
        <Button fullWidth onClick={handleAiTranslateClick} secondary>
          OpenAI Translate
        </Button>
      </div>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
