// import React, { useState } from "react";

// export default function UseState() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Increment/Decrement");

//   function increment() {
//     setCount(count + 1);
//   }
//   function decrement() {
//     setCount(count - 1);
//   }
//   return (
//     <>
//       <h1>{count}</h1>
//       {/* <button onClick={() => setCount(count + 1)}>+</button>
//       {count}
//       <button onClick={() => setCount(count - 1)}>-</button> */}
//       {name}
//       <br />
//       <button onClick={increment}>+</button>
//       {count}
//       <button onClick={decrement}>-</button>
//     </>

//   );
// }

import React, { useState } from "react";
export default function UseState() {
  const [count, setcount] = useState(0);

  function update() {
    setcount(count + 1);
  }
  return (
    <>
      <h1>Button clicked {count} times</h1>
      <button onClick={update}>Click</button>
    </>
  );
}
