import { Button, Container } from "react-bootstrap";
import CartItem from "./CartItem";
import { BoxArrowLeft, BoxArrowRight } from "react-bootstrap-icons";

const Shoppingcart = ({
  id,
  page,
  setPage,
  addProduct,
  updateQuantity,
  selectedProducts,
  setSelectedProducts,
}) => {
  const productIndex = selectedProducts.findIndex(
    (product) => product.id === id
  );
  const product = selectedProducts[productIndex];
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

        {selectedProducts
          ? selectedProducts.map((product) => (
              <div key={product.id}>
                <CartItem
                  id={product.id}
                  selectedProducts={selectedProducts}
                  addProduct={addProduct}
                  updateQuantity={updateQuantity}
                  page={page}
                  price={0}
                  setSelectedProducts={setSelectedProducts}
                />
              </div>
            ))
          : null}
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
