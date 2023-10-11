import React from "react";
import { Outlet } from "react-router-dom";
import Navbaar from "./Navbaar";

const Rootlayout = () => {
  return (
    <>
      <Navbaar />
      <Outlet />
    </>
  );
};

export default Rootlayout;
