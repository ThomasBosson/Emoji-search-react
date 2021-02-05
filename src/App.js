import "./App.css";
import { useState } from "react";
import emojiList from "./emojiList.json";
import Search from "./composants/Search";
import Line from "./composants/Line";

function App() {
  // déclarer une state "vide" -> input vide au chargement de la page.
  const [search, setSearch] = useState("");

  {
    /* Objectif : générer les emojis et leur nom via des keywords */
  }
  {
    /* Etape 1 : afficher les 20er éléments avant d'effectuer une recherche */
  }
  {
    /* Etape 2 : afficher les éléments correspondants aux recherches en fonction des keywords dans l'input */
  }

  return (
    <div className="container">
      <Search search={search} setSearch={setSearch} />
      <div className="box">
        {search === "" ? (
          <>
            {emojiList.slice(0, 20).map((emoji, index) => {
              return (
                <Line key={index} title={emoji.title} symbol={emoji.symbol} />
              );
            })}
          </>
        ) : (
          <>
            {emojiList.map((emoji, index) => {
              if (emoji.keywords.includes(search)) {
                return (
                  <Line key={index} title={emoji.title} symbol={emoji.symbol} />
                );
              } else {
                return null;
              }
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
