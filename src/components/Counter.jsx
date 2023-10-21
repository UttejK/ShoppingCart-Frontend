import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CartPlus, CartX } from "react-bootstrap-icons";
import { insertCartItem, updateCartItem, deleteCartItem } from "./utils"; // Importing addToCart and removeFromCart

export default function Counter({ id, price, initialQuantity, page }) {
  const [quantity, setQuantity] = useState(initialQuantity);
  // let quantity = initialQuantity;

  const handleDecreaseQuantity = () => {
    if (page === "cart") {
      if (quantity > 1) {
        setQuantity(() => quantity - 1);
        // quantity = quantity - 1;
        updateCartItem(id, quantity, price * quantity);
      } else {
        deleteCartItem(id);
      }
    }
  };

  const handleIncreaseQuantity = () => {
    if (page === "cart") {
      setQuantity(() => quantity + 1);
      // quantity = quantity + 1;
      updateCartItem(id, quantity, price * quantity);
    }
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
