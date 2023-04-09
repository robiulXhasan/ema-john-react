import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Product = (props) => {
  const { img, name, price, seller, ratings, id } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <Card className="position-relative text-start p-0">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Manufacturer:{seller}</Card.Text>
        <Card.Text>Rating: {ratings}</Card.Text>
      </Card.Body>
      <Button
        onClick={() => handleAddToCart(props.product)}
        className="position-absolute bottom-0 w-100 start-0 bg-warning"
      >
        Add to Cart <FontAwesomeIcon icon={faCartShopping} />
      </Button>
    </Card>
  );
};

export default Product;
