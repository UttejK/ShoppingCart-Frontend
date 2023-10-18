import { Card } from "react-bootstrap";
import Counter from "./Counter";
const Product = ({ cardImageURL, cardTitle, cardText }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="d-flex align-items-center">
        <Card.Img variant="top" src={cardImageURL} />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
          <Counter />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
