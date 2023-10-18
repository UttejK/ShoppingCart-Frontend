import { Button, Container } from "react-bootstrap";
import CartItem from "./CartItem";
import logoURLs from "./utils";
import { Check } from "react-bootstrap-icons";

const Checkout = ({ setPage }) => {
  return (
    <Container className="vh-100 d-flex flex-column w-50 align-items-center">
      <h1 className="text-center py-5">Checkout</h1>
      <CartItem
        id={0}
        imgSrc={logoURLs[0]}
        itemName={"Logo 1"}
        price={1.99}
        initialQuantity={10}
      />
      <CartItem
        id={1}
        imgSrc={logoURLs[1]}
        itemName={"Logo 2"}
        price={2.99}
        initialQuantity={13}
      />
      <CartItem
        id={3}
        imgSrc={logoURLs[4]}
        itemName={"Logo 5"}
        price={1.99}
        initialQuantity={10}
      />
      <CartItem
        id={4}
        imgSrc={logoURLs[5]}
        itemName={"Logo 6"}
        price={1.99}
        initialQuantity={10}
      />
      <Button
        variant="success"
        onClick={() => setPage("product")}
        className="w-50"
      >
        <span className="ps-3">Continue to checkout</span>
        <Check />
      </Button>
    </Container>
  );
};

export default Checkout;
