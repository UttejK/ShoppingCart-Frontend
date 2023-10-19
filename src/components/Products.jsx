import Product from "./Product";
import { Col, Container, Row } from "react-bootstrap";
import logoURLs from "./utils/index";

const Products = ({ addProduct, updateQuantity, selectedProducts }) => {
  const items = Array.from({ length: 16 }, (_, index) => {
    return {
      id: index + 1,
      logoURL: logoURLs[index],
    };
  });

  return (
    <div>
      <Container>
        <div className="titles d-flex flex-column align-items-center">
          <h1>We have a wide variety of products to choose from.</h1>
          <h2>Feel free to take your time and browse all of them...</h2>
        </div>
        <Row>
          {items.map((item) => {
            return (
              <Col
                key={item.id}
                className="my-auto p-3 d-flex justify-content-center"
              >
                <Product
                  id={item.id}
                  cardImageURL={item.logoURL}
                  cardTitle={`Logo ${item.id}`}
                  cardText={"This is an AI Generated Image"}
                  addProduct={addProduct}
                  updateQuantity={updateQuantity}
                  selectedProducts={selectedProducts}
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
