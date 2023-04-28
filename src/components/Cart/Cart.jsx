import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCreditCard,
  faTrashCan,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import { deleteShoppingCart } from "../../utilities/LocalStorage";
import { Link } from "react-router-dom";

const Cart = ({ cart, handleClearCart, children }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = product.quantity + quantity;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className=" rounded-2 ">
      <div className="bg-warning sticky-top px-3 py-5 ">
        <h4 className="text-center">Order Summary</h4>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax}</p>
        <h6>Grand Total: ${grandTotal}</h6>
        <Button onClick={handleClearCart} className="w-100 my-2 bg-danger">
          Clear Cart <FontAwesomeIcon icon={faTrashCan} />
        </Button>
        <br />
        {children}
      </div>
    </div>
  );
};

export default Cart;
