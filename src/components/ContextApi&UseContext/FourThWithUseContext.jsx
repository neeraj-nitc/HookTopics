import React from "react";
import { useContext } from "react";
import { data, data1, data3 } from "../Parent";

export default function FourThWithUseContext() {
  const fname = useContext(data);
  const fage = useContext(data1);
  const address = useContext(data3);
  return (
    <>
      <h1>
        my name is {fname} and my age is{fage} and my address is {address}
      </h1>
    </>
  );
}
