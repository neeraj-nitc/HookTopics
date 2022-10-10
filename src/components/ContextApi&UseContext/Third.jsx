import React from "react";
import { data, data1 } from "../Parent";

export default function Third() {
  return (
    // consumer accept only function
    <data.Consumer>
      {(data) => {
        return (
          <data1.Consumer>
            {(gen) => {
              return (
                <h1>
                  Hello my name is {data} and my Gender is {gen}
                </h1>
              );
            }}
          </data1.Consumer>
        );
      }}
    </data.Consumer>
  );
}
