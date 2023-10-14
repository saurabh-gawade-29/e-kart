import React from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Navbaar from "./Navbaar";
import Footer from "./Footer";
import Spinner from "./Spinner";

const Rootlayout = () => {
  return (
    <>
      <Navbaar />
      <Container>
        <Outlet />
        <Spinner />
      </Container>
      <Footer />
    </>
  );
};

export default Rootlayout;
