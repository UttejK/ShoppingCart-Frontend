import React from "react";
import { Button } from "react-bootstrap";
import { CartPlus, CartX } from "react-bootstrap-icons";

export default function Counter({
  id,
  selectedProducts,
  addProduct,
  updateQuantity,
  setSelectedProducts,
}) {
  const productIndex = selectedProducts.findIndex(
    (product) => product.id === id
  );
  const product = selectedProducts[productIndex];

  const handleAddToCart = () => {
    addProduct(id, 1);
  };

  const handleDecreaseQuantity = () => {
    if (product.quantity === 1) {
      // If quantity is 1, remove the product from selectedProducts
      setSelectedProducts(() =>
        selectedProducts.filter((item) => item.id !== id)
      );
    } else {
      // If quantity > 1, decrease the quantity
      updateQuantity(id, product.quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(id, product.quantity + 1);
  };

  return (
    <div>
      {productIndex === -1 ? (
        <Button onClick={handleAddToCart}>Add to cart</Button>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="danger" onClick={handleDecreaseQuantity}>
            <CartX />
          </Button>
          <span className="mx-3">{product.quantity}</span>
          <Button variant="success" onClick={handleIncreaseQuantity}>
            <CartPlus />
          </Button>
        </div>
      )}
    </div>
  );
}
