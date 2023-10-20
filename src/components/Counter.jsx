import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CartPlus, CartX } from "react-bootstrap-icons";
import { handleCartOperation } from "./utils"; // Importing addToCart and removeFromCart
export default function Counter({ id, price, initialQuantity }) {
  const [quantity, setQuantity] = useState(initialQuantity | 0);

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(() => quantity - 1);
      handleCartOperation(id, quantity - 1, price * quantity); // Call updateCart with productid, newQuantity, and totalAmount
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(() => quantity + 1);
    handleCartOperation(id, quantity + 1, price * quantity); // Call updateCart with productName, newQuantity, and totalAmount
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        {quantity > 0 ? (
          <>
            <Button variant="danger" onClick={handleDecreaseQuantity}>
              <CartX />
            </Button>
            <span className="mx-3">{quantity}</span>
          </>
        ) : null}
        <Button variant="success" onClick={handleIncreaseQuantity}>
          <CartPlus />
        </Button>
      </div>
    </div>
  );
}
