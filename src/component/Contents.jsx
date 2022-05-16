import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Content from "./Content";

export default function Contents({ data }) {
  const [selected, setSelected] = useState(data[0]);
  const style = {
    marginTop: "50px",
    width: "25%",
    selected: {
      color: "blue",
    },
  };
  return (
    <div className="left-side d-flex">
      <div className="justify-content-end w-25" style={style}>
        <ul>
          {data &&
            data.map((e, i) => (
              <li>
                <Link key={i} to={`${e}`} className="ms-4">
                  {/* {setSelected(e)} */}
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
