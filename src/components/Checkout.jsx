import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import CartItem from "./CartItem";

const Checkout = ({ setPage, page, user }) => {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Function to fetch checkout items from the API endpoint
  const fetchcheckoutItems = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/purchase/");
      if (response.ok) {
        const data = await response.json();
        setCheckoutItems(data);
      } else {
        console.error("Failed to fetch checkout items");
      }
    } catch (error) {
      console.error("Error fetching checkout items:", error);
    }
  };

  fetchcheckoutItems();

  return (
    <Container className="vh-100 d-flex flex-column w-50 align-items-center">
      <h1 className="text-center py-5">Checkout Confirmation</h1>
      {checkoutItems
        ? checkoutItems
            .filter((i) => i.user_id === user)
            .map((item) => (
              <div key={item.id}>
                <CartItem
                  id={item.product}
                  itemName={item.product}
                  price={item.amount_paid}
                  imgSrc={"https://placehold.co/60"}
                  quantity={item.quantity}
                  page={page}
                />
              </div>
            ))
        : null}

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
