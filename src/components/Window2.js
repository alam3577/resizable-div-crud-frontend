import React from "react";
import WindowItem from "./WindowItem";

function Window2({ data }) {
  return (
    <div className="w2">
      {data?.map((elem) => (
        <WindowItem elem={elem} />
      ))}
    </div>
  );
}

export default Window2;
