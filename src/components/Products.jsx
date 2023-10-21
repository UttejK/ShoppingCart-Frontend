import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingCarts, setIsLoadingCarts] = useState(true);
  const [initialCounts, setInitialCounts] = useState({});

  useEffect(() => {
    const fetchProducts = () => {
      fetch("http://127.0.0.1:8000/api/product/")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed to fetch products");
        })
        .then((data) => {
          setProducts(data);
          setIsLoadingProducts(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCartItems = () => {
      fetch("http://127.0.0.1:8000/api/cart/")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed to fetch cart items");
        })
        .then((data) => {
          setCartItems(data);
          setIsLoadingCarts(false);
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
        });
    };
    fetchCartItems();
  }, []);

  useEffect(() => {
    const initializeInitialCounts = () => {
      const counts = {};
      products.forEach((product) => {
        for (const key in cartItems) {
          if (cartItems[key].product === product.id) {
            counts[product.id] = cartItems[key].quantity;
            // console.log(counts[product.id], product.id);
            return;
          }
        }
        // If there is no matching cart item, set the initial count to 0
        counts[product.id] = 0;
      });
      setInitialCounts(counts);
    };

    if (!(isLoadingProducts && isLoadingCarts)) {
      initializeInitialCounts(); // Initialize counts only when cart items have been loaded
    }
  }, [isLoadingProducts, isLoadingCarts]);

  return (
    <div>
      <Container>
        <h1>Products Page</h1>
        {isLoadingCarts && isLoadingProducts && <p>Loading cart items...</p>}
        {!isLoadingCarts && !isLoadingProducts && (
          <Row>
            {products.map((product) => {
              return (
                <Col
                  key={product.id}
                  className="my-auto p-3 d-flex justify-content-center"
                >
                  <Product
                    id={product.id}
                    cardImageURL={product.image_url}
                    cardTitle={[product.price, product.name]}
                    cardText={`${product.id}. ${product.description}`}
                    initialCount={initialCounts[product.id]}
                  />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Products;
