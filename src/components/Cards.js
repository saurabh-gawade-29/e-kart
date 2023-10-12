import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const myCardStyle = {
  height: "200px",
  objectFit: "contain",
};
const Cards = ({ item }) => {
  debugger;
  return (
    <Card className="shadow">
      <Card.Img
        variant="top"
        src={item.image}
        className="img-fluid"
        style={myCardStyle}
      />
      <Card.Body>
        <Card.Title className="text-truncate">{item.title}</Card.Title>
        <Card.Text>Rupees: {item.price}</Card.Text>
        <Card.Text className="card-desc">{item.description}</Card.Text>
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
