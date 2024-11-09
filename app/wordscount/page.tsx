// page.tsx
"use client";

import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [wordCounts, setWordCounts] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    const text = "にわにわにはにわとりがいます";

    fetch(`./api/tokenize?text=${encodeURIComponent(text)}`)
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then(result => setWordCounts(result))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div className="text-white">
      {wordCounts ? (
        <ul>
          {Object.entries(wordCounts).map(([word, count]) => (
            <li key={word}>
              {word}: {count}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
