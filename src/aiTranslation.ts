import { callOpenAI } from "./apiClient";

const input_language = "English";
const output_language = "Hebrew";

export async function translateWithOpenAi(
  elements: Array<Record<string, string>>
) {
  try {
    // Extract all values and keys in order
    const entries = elements.map((obj) => Object.entries(obj)[0]);
    const keys = entries.map(([key]) => key);
    const values = entries.map(([_, value]) => value);

    // Join values with a special separator
    const combinedText = values.join(" ||| ");

    const completion = await callOpenAI([
      {
        role: "system",
        content: `You will be provided with multiple component texts separated by ' ||| '. Translate each text from ${input_language} to ${output_language}.\nThis is specifically for translating UI component labels, placeholders, and helper texts.\nReturn translations in the same order, separated by ' ||| '. Keep it precise and literal.`,
      },
      {
        role: "user",
        content: combinedText,
      },
    ]);

    // Split response and map back to original structure
    const translatedTexts =
      completion.choices[0].message.content?.trim().split(" ||| ") || values;

    return keys.map((key, index) => ({
      [key]: translatedTexts[index] || values[index],
    }));
  } catch (error) {
    console.error("Translation error:", error);
    return elements;
  }
}
