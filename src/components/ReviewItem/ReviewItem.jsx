import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewItem = ({ product,handleRemoveFromCart }) => {
  const { id,name, price, shipping, img, quantity } = product;
  return (
    <div class="card py-0 px-1 mb-3 border border-2">
      <div class="row g-0 align-items-center">
        <div class="col-2">
          <img src={img} class="img-fluid rounded justify-contain" />
        </div>
        <div class="col-9">
          <div class="card-body ">
            <h6 class="card-title mb-0">{name}</h6>
            <p class="card-text mb-0">
              Price: <span className="text-warning">${price}</span>
            </p>
            <p class="card-text mb-0">
              Shipping Charge: <span className="text-warning">${shipping}</span>
            </p>
            <p class="card-text">
              Quantity: <span className="text-warning">{quantity}</span>
            </p>
          </div>
        </div>
        <button
          onClick={() => handleRemoveFromCart(id)}
          className="col-1 bg-light px-2 py-2 text-center fs-4 rounded-circle"
        >
          <FontAwesomeIcon className="text-danger" icon={faTrashCan}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
