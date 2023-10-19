import { Button, Container } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";

const Checkout = ({
  setPage,
  addProduct,
  updateQuantity,
  selectedProducts,
}) => {
  return (
    <Container className="vh-100 d-flex flex-column w-50 align-items-center">
      <h1 className="text-center py-5">Checkout</h1>

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
