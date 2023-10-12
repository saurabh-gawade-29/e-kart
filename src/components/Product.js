import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const baseURL = "https://fakestoreapi.com/products";

const Product = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    debugger;
    getData();
  }, []);

  //! Using Async Await
  const getData = async () => {
    debugger;
    let resp = await fetch(baseURL);
    let parsedData = await resp.json();
    getProducts(parsedData);
  };

  const mappedCards = products.map((items, i) => {
    console.log(items, "items");
    return (
      <Col sm={12} md={3} lg={3} key={i} className="mb-4">
        <Cards item={items} />
      </Col>
    );
  });
  return (
    <div className="my-4">
      <Row className="m-0">{mappedCards}</Row>
    </div>
  );
};

export default Product;
