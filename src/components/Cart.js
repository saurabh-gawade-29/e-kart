import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cards from "./Cards";

const Cart = () => {
  let products = [];
  products = useSelector((state) => state.cart);
  const mappedCards = products.map((items, i) => {
    console.log(items, "items");
    return (
      <Col sm={12} md={4} lg={3} key={i} className="mb-4">
        <Cards item={items} btn={"Remove"} />
      </Col>
    );
  });

  return (
    <div>
      <h1 className="" style={{ marginTop: "4rem" }}>
        Cart - Work in progress
      </h1>
      <div className="my-4">
        <Row className="m-0">{mappedCards}</Row>
      </div>
    </div>
  );
};

export default Cart;
