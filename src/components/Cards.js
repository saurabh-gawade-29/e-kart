import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const myCardImgStyle = {
  height: "200px",
  objectFit: "contain",
};
const Cards = ({ item }) => {
  debugger;
  return (
    <Card className="shadow wrap-card">
      <span className="text-white rating">⭐{item.rating.rate}</span>
      <Card.Img
        variant="top"
        src={item.image}
        className="img-fluid"
        style={myCardImgStyle}
      />
      <Card.Body className="bg-card-body">
        <Card.Title
          className="text-truncate fw-bold"
          data-toggle="tooltip"
          title={item.title}
        >
          {item.title}
        </Card.Title>
        <Card.Text>₹ {item.price}</Card.Text>
        <Card.Text
          className="card-desc"
          data-toggle="tooltip"
          title={item.description}
        >
          {item.description}
        </Card.Text>
        <Button variant="secondary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
  }),
};

export default Cards;
