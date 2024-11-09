// pages/api/tokenize.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import kuromoji from 'kuromoji';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const text = req.query.text as string;

  kuromoji.builder({ dicPath: 'node_modules/kuromoji/dict' }).build((err, tokenizer) => {
    if (err) {
      res.status(500).json({ error: 'Tokenizer initialization failed' });
      return;
    }

    const tokens = tokenizer.tokenize(text);
    const wordCounts: Record<string, number> = {};

    tokens.forEach(token => {
      if (token.pos === '名詞' || token.pos === '形容詞') {
        const word = token.surface_form;
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      }
    });

    res.status(200).json(wordCounts);
  });
}
