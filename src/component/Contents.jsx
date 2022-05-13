import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Content from "./Content";

export default function Contents({ data }) {
  // debugger;
  const style = {
    width: "25%",
  };
  return (
    <div className="left-side d-flex">
      <div className="justify-content-end w-25">
        <ul>
          {data &&
            data.map((e, i) => (
              <li>
                <Link key={i} to={`${e}`} className="ms-4">
                  {e}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
