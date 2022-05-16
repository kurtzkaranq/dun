import React, { useEffect, createElement } from "react";
import { Outlet } from "react-router";

export default function Content(props) {
  const style = {
    marginTop: "auto",
    textAlign: "center",
    textDecoration: "wavy",
    marginRight: "15%",
    height: "76vh",
    display: "block",
  };
  useEffect(() => {}, [props.data]);
  const test = createElement(props.data.split("\n").join("<br />"));
  return (
    <div className="w-75" style={style}>
      {/* <h1>{Object.keys(props.title)[0]}</h1> */}
      {props.data}
      <Outlet />
    </div>
  );
}
//.split("\n").join("<br />")
