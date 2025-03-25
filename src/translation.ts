const TRANSLATE_TEXT_API_URL =
  "https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&dt=t&dj=1";

interface TranslationResult {
  text: string;
  error?: string;
}

function removeNikkud(text: string): string {
  return text.normalize("NFD").replace(/[\u0591-\u05C7]/g, "");
}

async function translate(
  text: string,
  sourceLang: string,
  targetLang: string
): Promise<TranslationResult> {
  try {
    const response = await fetch(
      `${TRANSLATE_TEXT_API_URL}&sl=${sourceLang}&tl=${targetLang}&q=${encodeURIComponent(
        text
      )}`,
      {
        method: "GET",
        headers: {
          "User-Agent":
            "AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const translatedText = data.sentences
      .map((s: { trans: string }) => s.trans)
      .join(" ");

    return {
      text: targetLang === "iw" ? removeNikkud(translatedText) : translatedText,
    };
  } catch (error) {
    console.error("Translation error:", error);
    return {
      text: "",
      error: String(error),
    };
  }
}

export async function translateEnglishToHebrew(
  text: string
): Promise<TranslationResult> {
  return translate(text, "en", "iw");
}

// export async function translateHebrewToEnglish(
//   text: string
// ): Promise<TranslationResult> {
//   return translate(text, "auto", "en");
// }
