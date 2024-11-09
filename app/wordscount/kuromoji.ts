import kuromoji from "kuromoji";

export function countMeaningfulWords(text: string): Promise<Record<string, number>> {
  return new Promise((resolve, reject) => {
    kuromoji.builder({ dicPath: "node_modules/kuromoji/dict" }).build((err, tokenizer) => {
      if (err) return reject(err);

      const tokens = tokenizer.tokenize(text);
      const wordCounts: Record<string, number> = {};

      tokens.forEach(token => {

        if (token.pos === "名詞" || token.pos === "形容詞") {
          const word = token.surface_form;
          wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
      });

      resolve(wordCounts);
    });
  });
}
