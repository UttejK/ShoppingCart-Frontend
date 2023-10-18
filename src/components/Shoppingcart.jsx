import { Button, Container } from "react-bootstrap";
import CartItem from "./CartItem";
import logoURLs from "./utils";
import { BoxArrowLeft, BoxArrowRight } from "react-bootstrap-icons";

const Shoppingcart = ({ page, setPage }) => {
  return (
    <>
      <Container className="vh-100 d-flex flex-column w-50 align-items-center">
        <h1 className="text-center py-5">Shopping Cart</h1>
        <Button
          variant="light"
          onClick={() => setPage("product")}
          className="w-50"
        >
          <BoxArrowLeft />
          <span className="ps-3">Back to Products page</span>
        </Button>

        <CartItem
          id={0}
          imgSrc={logoURLs[0]}
          itemName={"Logo 1"}
          price={1.99}
          initialQuantity={10}
        />
        <CartItem
          id={0}
          imgSrc={logoURLs[0]}
          itemName={"Logo 1"}
          price={1.99}
          initialQuantity={10}
        />
        <CartItem
          id={0}
          imgSrc={logoURLs[0]}
          itemName={"Logo 1"}
          price={1.99}
          initialQuantity={10}
        />
        <CartItem
          id={0}
          imgSrc={logoURLs[0]}
          itemName={"Logo 1"}
          price={1.99}
          initialQuantity={10}
        />
        <Button
          variant="light"
          onClick={() => setPage("checkout")}
          className="w-50"
        >
          <BoxArrowRight />
          <span className="ps-3">Continue to checkout</span>
        </Button>
      </Container>
    </>
  );
};

export default Shoppingcart;
