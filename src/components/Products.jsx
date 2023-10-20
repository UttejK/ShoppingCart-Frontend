import Product from "./Product";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch products from the API endpoint
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/product/");
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
  }, []); // Empty dependency array ensures that this effect runs once after the initial render
  // console.log(products);

  return (
    <div>
      <Container>
        <div
          className="titles d-flex flex-column align-items-center fw-bold"
          style={{ color: "#000" }}
        >
          <h2>We have a wide variety of products to choose from.</h2>
          <h3>Feel free to take your time and browse all of them</h3>
        </div>
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
                  cardText={product.description}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
