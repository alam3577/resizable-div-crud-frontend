import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddContent from "../pages/AddConent";
import EditContent from "../pages/EditContent";

function Routers() {
  return (
    <div>
      <Routes>
        <Route strict exact={true} path="/" element={<Home />} />
        <Route
          strict
          exact={true}
          path="/add/content"
          element={<AddContent />}
        />
        <Route
          strict
          exact={true}
          path="/edit/:contentId"
          element={<EditContent />}
        />
      </Routes>
    </div>
  );
}

export default Routers;
