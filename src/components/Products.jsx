import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [initialCounts, setInitialCounts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await fetch(
          "http://127.0.0.1:8000/api/product/"
        );
        const cartResponse = await fetch("http://127.0.0.1:8000/api/cart/");

        if (productsResponse.ok && cartResponse.ok) {
          const productsData = await productsResponse.json();
          const cartData = await cartResponse.json();

          setProducts(productsData);
          setCartItems(cartData);

          const counts = {};
          productsData.forEach((product) => {
            const cartItem = cartData.find(
              (item) => item.product === product.id
            );
            counts[product.id] = cartItem ? cartItem.quantity : 0;
          });
          setInitialCounts(counts);
          setIsLoading(false);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div>
      <Container>
        <h1>Products Page</h1>
        {isLoading && <p>Loading cart items...</p>}
        {!isLoading && (
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
