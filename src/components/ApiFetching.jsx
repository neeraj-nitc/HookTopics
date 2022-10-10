import React from "react";
import { useState, useEffect } from "react";

export default function ApiFetching() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https:fakestoreapi.com/users").then((resp) => {
      resp.json().then((result) => {
        console.log("result", result);
        setData(result);
      });
    });
  }, []);

  return (
    <div className="app">
      <h1>Get Api data call</h1>
      <table border="1">
        <tr>
          <td>ID</td>
          <td>Email</td>
          <td>Username</td>
          <td>Password</td>
          <td>fname</td>
          <td>lname</td>
          <td>Phone</td>
          <td>City</td>
          <td>Street</td>
          <td>number</td>
        </tr>
        {data.map((item, i) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.name.firstname}</td>
              <td>{item.name.lastname}</td>
              <td>{item.phone}</td>
              <td>{item.address.city}</td>
              <td>{item.address.street}</td>
              <td>{item.address.number}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
