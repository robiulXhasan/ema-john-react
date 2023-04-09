import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart }) => {
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
  console.log(total, totalShipping);
  return (
    <div className=" rounded-2 sticky-top ">
      <div className="bg-warning sticky-top px-3 py-5 ">
        <h4 className="text-center">Order Summary</h4>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax}</p>
        <h6>Grand Total: ${grandTotal}</h6>
        <Button className="w-100 my-2 bg-danger">
          Clear Cart <FontAwesomeIcon icon={faTrashCan} />
        </Button>
        <br />
        <Button className="w-100">
          Review Order <FontAwesomeIcon icon={faArrowRight} />{" "}
        </Button>
      </div>
    </div>
  );
};

export default Cart;
