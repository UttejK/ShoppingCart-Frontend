import { Button, Container } from "react-bootstrap";
import CartItem from "./CartItem";
import { BoxArrowLeft, BoxArrowRight } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

const Shoppingcart = ({ id, page, setPage }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Function to fetch products from the API endpoint
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/cart/");
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchProducts function
    fetchProducts();
  }, []);
  // products.map((p) => console.log(p));
  return (
    <>
      <Container
        style={{ background: "rgb(237, 255, 234)" }}
        className="vh-100 d-flex flex-column w-50 align-items-center shadow-lg"
      >
        <h1 className="text-center py-5">Shopping Cart</h1>
        <Button
          variant="light"
          onClick={() => setPage("product")}
          className="w-75 shadow mb-5"
        >
          <BoxArrowLeft />
          <span className="ps-3">Back to Products page</span>
        </Button>

        {products.map((product) => (
          <div
            key={product.id}
            className="d-flex flex-between justify-content-between"
          >
            <CartItem
              id={product.id}
              itemName={product.product}
              price={product.total_amount}
              products={products}
              page={page}
              imgSrc={"https://placehold.co/60"}
              quantity={product.quantity}
            />
          </div>
        ))}
        <Button
          variant="light"
          onClick={() => setPage("checkout")}
          className="w-75 shadow mt-5"
        >
          <BoxArrowRight />
          <span className="ps-3">Continue to checkout</span>
        </Button>
      </Container>
    </>
  );
};

export default Shoppingcart;
