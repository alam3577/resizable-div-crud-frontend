import React from "react";
import WindowItem from "./WindowItem";

function Window1({ data }) {
  return (
    <div className="w1">
      {data?.map((elem) => (
        <WindowItem elem={elem} />
      ))}
    </div>
  );
}

export default Window1;
