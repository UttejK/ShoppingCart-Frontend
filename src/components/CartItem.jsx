import React from "react";
import {} from "react-bootstrap";

const CartItem = ({ imgSrc, itemName, id, quantity, price }) => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-5 px-5 py-4">
      <span>{id}</span>
      <img
        src={imgSrc}
        alt={itemName}
        style={{ objectFit: "contain", width: "4rem" }}
      />
      <span>{itemName}</span>
      <span>{quantity}</span>
      <span>{price * quantity}</span>
    </div>
  );
};

export default CartItem;
