import { Button, Container } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import CartItem from "./CartItem";

const Checkout = ({
  setPage,
  addProduct,
  updateQuantity,
  selectedProducts,
  page,
}) => {
  return (
    <Container className="vh-100 d-flex flex-column w-50 align-items-center">
      <h1 className="text-center py-5">Checkout</h1>
      {selectedProducts
        ? selectedProducts.map((product) => (
            <div key={product.id}>
              <CartItem
                id={product.id}
                selectedProducts={selectedProducts}
                addProduct={addProduct}
                updateQuantity={updateQuantity}
                price={0}
                page={page}
                // setSelectedProducts={setSelectedProducts}
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
