import React from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Navbaar from "./Navbaar";
import Footer from "./Footer";
import Spinner from "./Spinner";
import ScrolTop from "./ScrolTop";

const Rootlayout = () => {
  return (
    <>
      <Navbaar />
      <Container>
        <Outlet />
        <Spinner />
      </Container>
      <ScrolTop />
      <Footer />
    </>
  );
};

export default Rootlayout;
