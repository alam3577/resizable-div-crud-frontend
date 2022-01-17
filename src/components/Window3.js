import React from "react";
import WindowItem from "./WindowItem";

function Window3({ data }) {
  return (
    <div className="w3">
      {data?.map((elem) => (
        <WindowItem elem={elem} />
      ))}
    </div>
  );
}

export default Window3;
