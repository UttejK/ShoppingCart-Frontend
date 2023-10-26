import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import CartItem from "./CartItem";
// import { fetchcheckoutItems } from "./utils";

const Checkout = ({ setPage, page, user }) => {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [total, setTotal] = useState(0);

  // console.log(user);

  const fetchcheckoutItems = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/purchase/");
      if (response.ok) {
        const data = await response.json();
        setCheckoutItems(data);
        setLoaded(true);
        const calculatedTotal = data
          .filter((i) => i.user_id === user)
          .reduce((acc, item) => {
            console.log("Current Item Amount Paid:", acc, item.amount_paid);
            return acc + parseFloat(item.amount_paid * item.quantity);
          }, 0);
        setTotal(calculatedTotal);
      } else {
        console.error("Failed to fetch checkout items");
      }
    } catch (error) {
      console.error("Error fetching checkout items:", error);
    }
  };

  useEffect(() => {
    fetchcheckoutItems();
  });

  return (
    <Container
      style={{ height: "85vh", overflow: "scroll" }}
      className="d-flex flex-column w-50 align-items-center"
    >
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

      <span className="text-center mb-3">Total: ₹{total.toFixed(2)}</span>

      <Button
        variant="success"
        onClick={() => setPage("product")}
        className="w-50 mb-5"
      >
        <span className="ps-3">Checkout Successful </span>
        <Check />
      </Button>
    </Container>
  );
};

export default Checkout;
