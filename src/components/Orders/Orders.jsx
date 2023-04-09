import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/LocalStorage";

const Orders = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState(products);
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
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
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
