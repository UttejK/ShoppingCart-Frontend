import Product from "./Product";
import { Col, Container, Row } from "react-bootstrap";
import logoURLs from "./utils/index";

const Products = () => {
  const items = Array.from({ length: 16 }, (_, index) => {
    return {
      id: index + 1,
      logoURL: logoURLs[index],
    };
  });

  return (
    <div>
      <Container>
        <Row>
          {items.map((item) => {
            return (
              <Col
                key={item.id}
                className="my-auto p-3 d-flex justify-content-center"
              >
                <Product
                  cardImageURL={item.logoURL}
                  cardTitle={`Logo ${item.id}`}
                  cardText={"This is an AI Generated Image"}
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
