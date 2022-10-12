// The Effect Hook lets you perform side effects in function components:
// Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
// If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

//  Jab bhi state update hota hai to use effect call hota hai

import React, { useState, useEffect } from "react";
export default function UseState() {
  const [count, setcount] = useState(0);
  const [data, setData] = useState("Ram");

  useEffect(() => {
    console.log("component mount");
  }, [data]);

  function update() {
    setcount(count + 1);
  }
  function updateData() {
    setData("deta");
  }
  return (
    <>
      <h1>Button clicked {count} times</h1>
      <h1>Button clicked {data} times</h1>
      <button onClick={update}>Click</button>
      <button onClick={updateData}>updateData</button>
    </>
  );
}
