import React from "react";
import Titles from "./Titles";
import Contens from "./Contents";

export default function Main({ data }) {
  return (
    <div className="justify-content-start d-flex">
      <Titles />
      <Contens content={data} />
    </div>
  );
}
