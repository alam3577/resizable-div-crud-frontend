import React from "react";
import { NavLink } from "react-router-dom";

function WindowItem({ elem }) {
  return (
    <div key={elem._id}>
      <NavLink strict exact={true} to={`/edit/${elem._id}`}>
        <img src={elem.img} alt="" srcset="" />
      </NavLink>
      <h1>{elem.name}</h1>
      <p>{elem.desc}</p>
    </div>
  );
}

export default WindowItem;
