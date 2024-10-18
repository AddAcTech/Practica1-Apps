import React from "react";

function Data({ strings }) {
  return <div className="max-w-md p-4 border rounded-md gap-2 grid grid-cols-3">{strings.map((comb) =>
    <p>{comb}</p>
  )}</div>;
}

export default Data;
