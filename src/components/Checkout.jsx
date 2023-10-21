import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import CartItem from "./CartItem";

const Checkout = ({ setPage, page }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Function to fetch cart items from the API endpoint
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/cart/");
        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
        } else {
          console.error("Failed to fetch cart items");
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    // Call the fetchCartItems function
    fetchCartItems();
  }, []);
  console.log(cartItems);

  return (
    <Container className="vh-100 d-flex flex-column w-50 align-items-center">
      <h1 className="text-center py-5">Checkout Confirmation</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <CartItem
            id={item.product}
            itemName={item.product} // Replace this with the correct property name for the product name
            price={item.total_amount}
            imgSrc={"https://placehold.co/60"} // You can use the actual image URL here
            quantity={item.quantity}
            page={page}
          />
        </div>
      ))}
      <Button
        variant="success"
        onClick={() => setPage("product")}
        className="w-50"
      >
        <span className="ps-3">Checkout Successful </span>
        <Check />
      </Button>
    </Container>
  );
};

export default Checkout;
