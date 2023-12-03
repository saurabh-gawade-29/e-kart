import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Cart</h1>
      <p>{JSON.stringify(products)}</p>
    </div>
  );
};

export default Cart;
