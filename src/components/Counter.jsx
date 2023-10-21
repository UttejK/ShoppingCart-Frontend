import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CartPlus, CartX } from "react-bootstrap-icons";
import { updateCartItem, deleteCartItem, insertCartItem } from "./utils";

export default function Counter({ id, price, initialQuantity, page }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    // Update the cart item whenever quantity changes
    if (page === "cart") {
      if (quantity === 0) {
        deleteCartItem(id);
      } else {
        updateCartItem(id, quantity, price);
      }
    }
  }, [quantity]);

  const handleDecreaseQuantity = () => {
    if (page === "cart" && quantity > 0) {
      setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    } else if (page === "product" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (page === "cart") setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    if (page === "product" && quantity === 0) {
      insertCartItem(id, 1, price); // Add item to the cart with quantity 1
      setQuantity(1);
    }
  };

  return (
    <div>
      {page === "cart" ? (
        <div className="d-flex align-items-center justify-content-center">
          {quantity > 0 ? (
            <>
              <Button variant="danger" onClick={handleDecreaseQuantity}>
                <CartX />
              </Button>
              <span className="mx-3">{quantity}</span>
            </>
          ) : null}
          <Button
            variant="success"
            onClick={quantity === 0 ? handleAddToCart : handleIncreaseQuantity}
          >
            {quantity === 0 ? <CartPlus /> : <CartX />}
          </Button>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          {quantity > 0 ? (
            <span className="mx-3">
              {" "}
              {page === "product" ? (
                <strong>
                  {" "}
                  &apos;{quantity}&apos; in cart, Go to Cart to remove it{" "}
                </strong>
              ) : (
                <strong>Purchase Confirmed</strong>
              )}
            </span>
          ) : null}
          {quantity === 0 ? (
            <Button variant="success" onClick={handleAddToCart}>
              <CartPlus />
            </Button>
          ) : null}
        </div>
      )}
    </div>
  );
}
