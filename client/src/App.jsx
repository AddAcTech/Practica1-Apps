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
    <div className="text-3xl font bold w-screen flex flex-col items-center gap-2">
      <h1 className="font-bold font-sans text-3xl">Bienvenido</h1>
      <input
        type="number"
        onChange={handleChange}
        className="border rounded-md px-2 w-28"
      />
      <div className="flex flex-col gap-2 sm:flex-row p-2">
        <button
          onClick={() => sendRequest("cerradura")}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Cerradura Kleene
        </button>
        <button
          onClick={() => sendRequest("cerradura/suma")}
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        >
          Cerradura Positiva
        </button>
      </div>
      <Data strings={strings} />
    </div>
  );
}

export default App;
