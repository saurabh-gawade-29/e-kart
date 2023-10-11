import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Rootlayout from "./Rootlayout";
import Cart from "./Cart";

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Dashboard />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

export default Routes;
