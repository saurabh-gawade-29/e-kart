import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { trackPromise } from "react-promise-tracker";

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
    try {
      let resp = await trackPromise(fetch(baseURL));
      let parsedData = await resp.json();
      getProducts(parsedData);
    } catch (error) {
      alert(error + "");
    }
  };

  const mappedCards = products.map((items, i) => {
    console.log(items, "items");
    return (
      <Col sm={12} md={4} lg={3} key={i} className="mb-4">
        <Cards item={items} btn={"Add to cart"} />
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
