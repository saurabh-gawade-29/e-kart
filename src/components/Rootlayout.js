import React from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Navbaar from "./Navbaar";
import Footer from "./Footer";
import Spinner from "./Spinner";
import ScrolTop from "./ScrolTop";
import store from "../store/store";
import { Provider } from "react-redux";

const Rootlayout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbaar />
        <Container>
          <Outlet />
          <Spinner />
        </Container>
        <ScrolTop />
        <Footer />
      </Provider>
    </>
  );
};

export default Rootlayout;
