import { Container } from "react-bootstrap";
import CartItem from "./CartItem";
import logoURLs from "./utils";

const Shoppingcart = () => {
  return (
    <Container className="vh-100">
      <h1 className="text-center py-5">Shopping Cart</h1>
      <CartItem
        id={0}
        imgSrc={logoURLs[0]}
        itemName={"Logo 1"}
        price={1.99}
        quantity={10}
      />
      <CartItem
        id={0}
        imgSrc={logoURLs[0]}
        itemName={"Logo 1"}
        price={1.99}
        quantity={10}
      />
      <CartItem
        id={0}
        imgSrc={logoURLs[0]}
        itemName={"Logo 1"}
        price={1.99}
        quantity={10}
      />
      <CartItem
        id={0}
        imgSrc={logoURLs[0]}
        itemName={"Logo 1"}
        price={1.99}
        quantity={10}
      />
    </Container>
  );
};

export default Shoppingcart;
