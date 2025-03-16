import { callOpenAI } from "./apiClient";

const input_language = "English";
const output_language = "Hebrew";

export async function translateWithOpenAi(
  elements: Array<Record<string, string>>
) {
  const translatedElements = [];

  try {
    for (const element of elements) {
      const key = Object.keys(element)[0];
      const value = element[key];

      const completion = await callOpenAI([
        {
          role: "system",
          content: `You will be provided with a design system component element name in ${input_language}.\nTranslate the text into ${output_language}.\nThis is specifically for translating UI component labels, placeholders, and helper texts.\nOnly output the translated text, without any additional text or explanations.`,
        },
        {
          role: "user",
          content: value,
        },
      ]);

      translatedElements.push({
        [key]: completion.choices[0].message.content?.trim() || value,
      });
    }

    return translatedElements;
  } catch (error) {
    console.error("Translation error:", error);
    return elements;
  }
}
