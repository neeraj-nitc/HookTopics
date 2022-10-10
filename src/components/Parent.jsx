/*
//  for prop drilling

import React from "react";
import ChildA from "./PropDrilling/ChildA";

 for prop driling
export default function Parent() {
  const name = "Anjali";
  return (
    <>
      <ChildA name={name} />
    </>
  );
}
*/
//************************************************************************************************************** */
/*
Basic need to know of Context Api :
1- createContext
2-Provider
3-export variable
4-import variable the next component where we can transfer the varible
5-consume and consumer want the function
6-Is context api also problematic and complex like callbackhell, so reduce this problem we can fix the useContextApi
*/

/* 
import React from "react";
import { createContext } from "react";

import First from "./ContextApi&UseContext/First";

const data = createContext();
const data1 = createContext();

export default function Parent() {
  const name = "neeraj";
  const gen = "male";
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gen}>
          <First />
        </data1.Provider>
      </data.Provider>
    </>
  );
}
export { data, data1 };*/

// **********************************************************************************************************
// Only we have to know 1. CreateContext, 2.provider, 3. useContext
/*
 */
import React from "react";
import { createContext } from "react";
import FourThWithUseContext from "./ContextApi&UseContext/FourThWithUseContext";

const data = createContext();
const data1 = createContext();
const data3 = createContext();
export default function Parent() {
  const name = "neeraj";
  const age = 28;
  const add = "Pandav Nagar New Delhi";
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <data3.Provider value={add}>
            <FourThWithUseContext />
          </data3.Provider>
        </data1.Provider>
      </data.Provider>
    </>
  );
}
export { data, data1, data3 };
