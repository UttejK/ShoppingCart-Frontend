import { Button, Container } from "react-bootstrap";
import { BoxArrowLeft, BoxArrowRight } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import {
  addToPurchase,
  deleteCartItem,
  updateProduct,
  fetchcheckoutItems,
} from "./utils";
import CartItem from "./CartItem";

const Shoppingcart = ({ id, page, setPage, user, setUser }) => {
  const [cartItems, setCartItems] = useState([]);

  const getProductatId = async (id) => {
    return new Promise((resolve, reject) => {
      fetch(`http://127.0.0.1:8000/api/product/${id}/`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed to fetch data");
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const handleUserInputChange = (event) => {
    if (isNaN(parseInt(event.target.value))) alert("Please Enter Only Numbers");
    setUser(() => parseInt(event.target.value));
  };

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/cart/");
      if (response.ok) {
        const data = await response.json();
        setCartItems(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchCartItems();
  });

  return (
    <>
      <Container
        style={{
          background: "rgb(237, 255, 234)",
          overflow: "scroll",
          height: "85vh",
        }}
        className="d-flex flex-column w-50 align-items-center shadow-lg"
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
        <input
          type="number"
          name="userId"
          id="1"
          placeholder="Please enter User ID to proceed (just a number)"
          className="w-50 mb-2"
          required={true}
          onChange={handleUserInputChange}
        />
        {cartItems.map((product) => (
          <div
            key={product.id}
            className="d-flex flex-between justify-content-between"
          >
            <CartItem
              id={id}
              itemName={product.product}
              price={product.total_amount}
              products={cartItems}
              page={page}
              imgSrc={"https://placehold.co/60"}
              quantity={product.quantity}
            />
          </div>
        ))}

        <Button
          variant="success"
          onClick={async () => {
            fetchCartItems();
            for (const key in cartItems) {
              try {
                getProductatId(cartItems[key].product).then((productData) =>
                  updateProduct(
                    productData.id,
                    productData.name,
                    (
                      productData.total_available - cartItems[key].quantity
                    ).toFixed(2),
                    productData.price,
                    productData.image_url,
                    productData.description,
                    productData.category
                  )
                    .then(() => console.log("updates must be done"))
                    .catch((r) => console.warn(r))
                    .then(() =>
                      addToPurchase(
                        cartItems[key].product,
                        cartItems[key].quantity,
                        cartItems[key].total_amount,
                        user
                      )
                    )
                    .then(() => deleteCartItem(cartItems[key].product))
                );
              } catch (error) {
                console.error(error);
              }
            }
            setPage("checkout");
            // fetchcheckoutItems();
          }}
          className="w-75 shadow mt-1 mb-5"
        >
          <BoxArrowRight />
          <span className="ps-3">Continue to checkout</span>
        </Button>
      </Container>
    </>
  );
};

export default Shoppingcart;
