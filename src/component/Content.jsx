import React, { useEffect } from "react";
import { Outlet } from "react-router";

export default function Content({ data }) {
  const style = {
    backgroundColor: "red",
    height: "76vh",
  };
  useEffect(() => {}, [data]);
  return (
    <div className="w-75" style={style}>
      <h1>{data.title}</h1>
      <p>{data}</p>
      <Outlet />
    </div>
  );
}
