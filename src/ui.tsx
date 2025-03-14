import {
  Button,
  Columns,
  Container,
  render,
  Text,
  VerticalSpace,
  Checkbox,
} from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h, JSX } from "preact";
import { useState } from "preact/hooks";
import {
  translateEnglishToHebrew,
  translateHebrewToEnglish,
} from "./translation";

function Plugin() {
  const [isTranslate, setIsTranslate] = useState(false);

  translateEnglishToHebrew("label").then((result) => {
    console.log("translateEnglishToHebrew", result);
  });

  function handleCreateRectanglesButtonClick() {
    emit("MIRROR");
  }

  function handleCloseButtonClick() {
    emit("TRANSLATE");
  }

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
    <Container space="medium">
      <VerticalSpace space="large" />
      <CheckboxElement
        value={isTranslate}
        setValue={setIsTranslate}
        label="translate"
      />
      <VerticalSpace space="extraLarge" />
      <Columns space="extraSmall">
        <Button fullWidth onClick={handleCreateRectanglesButtonClick}>
          Mirror
        </Button>
        <Button fullWidth onClick={handleCloseButtonClick} secondary>
          Translate
        </Button>
      </Columns>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
