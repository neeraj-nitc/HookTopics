// What is useRef?? -> dom Manipulate
// basically useref current object ko return krta hai aur ham use ref ki help se dom ko manipulate kr skte hai

import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function UseRef() {
  const refElement = useRef("");
  const [name, setName] = useState("Neeraj");
  console.log(refElement);

  function Reset() {
    setName("");
    refElement.current.focus();
  }

  function handleInput() {
    refElement.current.style.color = "blue";
    refElement.current.value = "raj";
  }

  return (
    <>
      <h1>Learning useRef</h1>
      <input
        type="text"
        ref={refElement}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>handle input</button>
    </>
  );
}
