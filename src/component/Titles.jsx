import React from "react";
import "../style/titles.css";

export default function Titles() {
  const style = {
    height: "100vh",
  };
  return (
    <div className="w-25 left-side" style={style}>
      <h3>HTML</h3>
      <ul>
        <li>
          <a href="#">Introduction</a>
        </li>
        <li>
          <a href="#">Basic</a>
        </li>
        <li>
          <a href="#">Elements</a>
        </li>
        <li>
          <a href="#">Attributes</a>
        </li>
        <li>
          <a href="#">Lists</a>
        </li>
        <li>
          <a href="#">Heading</a>
        </li>
      </ul>
    </div>
  );
}
