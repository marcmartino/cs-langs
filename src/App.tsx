import React, { useState } from "react";
import "./App.css";
import foneng from "./langMaps/foneng";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { SearchIPADB } from "./components/SearchIPADB/SearchIPADB";

function App() {
  const [inputCharacters, setInputCharacters] = useState<
    (keyof typeof foneng)[]
  >([]);
  const inputText = inputCharacters.join("");
  const inputIpa = inputCharacters.map((l) => foneng[l]).join("");
  return (
    <div className="App">
      <header className="App-header">
        <input style={{ fontSize: "1.5rem" }} readOnly value={inputText} />
        <Keyboard
          langMap={foneng}
          onPress={({ letter }) =>
            setInputCharacters((inputCharacters) => {
              switch (letter) {
                case "backspace":
                  return inputCharacters.length <= 1
                    ? []
                    : inputCharacters.slice(0, -1);

                default:
                  return [...inputCharacters, letter];
              }
            })
          }
        />

        {inputCharacters.length > 0 && <div>/{inputIpa}/</div>}
        <SearchIPADB search={inputIpa} />
      </header>
    </div>
  );
}

export default App;
