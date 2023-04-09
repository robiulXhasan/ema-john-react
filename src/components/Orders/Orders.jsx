import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/LocalStorage";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState(products);
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const count = 2;
  console.log(products);
  return (
    <div className="container">
      <div className="row  p-2 p-md-5 gap-5">
        <div className="col-md-7">
          <div>
            {cart.map((product) => (
              <ReviewItem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
              ></ReviewItem>
            ))}
          </div>
        </div>
        <div className="col-md-4 ">
          <Cart cart={cart} handleClearCart={handleClearCart} >
          <Button className="w-100 ">
            <Link className="text-white" to="/orders">
              Proceed Checkout <FontAwesomeIcon icon={faCreditCard} />
            </Link>
          </Button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
