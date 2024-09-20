import React, { useState } from "react";
import Data from "./components/Data";

function App() {
  const [data, setData] = useState();
  const [strings, setStrings] = useState();

  function handleChange(e) {
    setData(e.target.value);
  }

  function sendRequest(cerradura) {
    try {
      const getData = async () => {
        const response = await fetch(
          `http://localhost:3000/${cerradura}/${data}`
        );
        const responseJson = await response.json();
        setStrings(responseJson);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="text-3xl font bold">
      <h1>Bienvenido</h1>
      <input type="text" onChange={handleChange} className="border broder-1" />
      <button onClick={() => sendRequest("cerradura")}>Cerradura Kleene</button>
      <button onClick={() => sendRequest("positiva")}>
        Cerradura Positiva
      </button>
      <Data strings={strings} />
    </div>
  );
}

export default App;
