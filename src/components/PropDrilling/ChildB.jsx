import React from "react";
import ChildC from "./ChildC";

export default function ChildB({ name }) {
  return (
    <>
      <ChildC name={name} />
    </>
  );
}
