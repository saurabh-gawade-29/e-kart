import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, getProducts] = useState([]);
  useEffect(() => {
    debugger
    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        console.log(data, "API Response Data");
        data.json();
      })
      .then((result) => {
        console.log(result, "API DATA.JSON");
        getProducts(result);
      });
  }, []);
  return (
    <div>
      <h1>Product</h1>
      <p>{JSON.stringify(products)}</p>
    </div>
  );
};

export default Product;
