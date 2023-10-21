import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CartPlus, CartX } from "react-bootstrap-icons";
import { updateCartItem, deleteCartItem } from "./utils";

export default function Counter({ id, price, initialQuantity, page }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    // Update the cart item whenever quantity changes
    if (page === "cart") {
      updateCartItem(id, quantity, price * quantity);
    }
  }, [quantity, id, price, page]);

  const handleDecreaseQuantity = () => {
    if (page === "cart") {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      } else {
        setQuantity(0); // Ensure quantity doesn't go below 0
        deleteCartItem(id);
      }
    }
  };

  const handleIncreaseQuantity = () => {
    if (page === "cart") {
      setQuantity((prevQuantity) => prevQuantity + 1);
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
