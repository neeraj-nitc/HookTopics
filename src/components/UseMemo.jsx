// for Improve our application performence we have to use useMemo() hook

import React from "react";
import { useMemo } from "react";
import { useState } from "react";

export default function UseMemo() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(50);

  // =>jab hum add state ko update kr rhe hote hai to by defaul unnecessary function call hone lagta hai dusre
  // state me, isi problm ko fix krne ke liye hum useMemo ka use krte hai.
  //=>basically unnecessary function call ko rokne ke liye useMemo ka use krte hai
  // function mul() {
  //   console.log("multiple");
  //   return add * 10;
  // }

  const multiplication = useMemo(
    function mul() {
      console.log("multiple");
      return add * 10;
    },
    [add]
  );
  return (
    <div className="app">
      <h1>Learning useMemo</h1>
      {/* {mul()} <br /> */}
      {multiplication} <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Minus</button>
      <span>{minus}</span>
    </div>
  );
}
