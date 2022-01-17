import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Window1 from "../components/Window1";
import Window2 from "../components/Window2";
import Window3 from "../components/Window3";
import { loadContents } from "../store/actions/dispatcher";
import { Resizable } from "re-resizable";

function Home() {
  let dispatch = useDispatch();
  const { contents } = useSelector((state) => state.content);
  const style1 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
  };
  const style = {};
  useEffect(() => {
    dispatch(loadContents());
  }, []);
  return (
    <div className="main__container">
      <Resizable
        style={style1}
        defaultSize={{
          width: "30%",
          height: "70%",
        }}
        maxWidth="55%"
      >
        {" "}
        <Window1 className="w1" data={contents} />
      </Resizable>
      <Resizable
        style={style}
        defaultSize={{
          width: "70%",
          height: "70%",
        }}
        maxWidth="80%"
      >
        {" "}
        <Window2 data={contents} />
      </Resizable>
      <Resizable
        style={style}
        defaultSize={{
          width: "100%",
          height: 700,
        }}
        maxWidth="100%"
      >
        {" "}
        <Window3 data={contents} />
      </Resizable>
    </div>
  );
}

export default Home;
