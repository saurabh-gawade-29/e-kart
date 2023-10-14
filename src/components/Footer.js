import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="shadow fixed-bottom bg-white">
      <Container>
        <p className="m-0 py-1">
          <marquee behavior="" direction="">
            🚂React - Redux Toolkit - React Bootstrap - Track Promise🚃
          </marquee>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
