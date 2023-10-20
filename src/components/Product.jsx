import { Card } from "react-bootstrap";
import Counter from "./Counter";

const Product = ({
  id,
  cardImageURL,
  cardTitle,
  cardText,
  selectedProducts,
  addProduct,
  updateQuantity,
}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="d-flex align-items-center">
        <Card.Img variant="top" src={cardImageURL} />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text className="text-break">
            <br />
            {cardText}
          </Card.Text>

          <Counter
            id={id}
            selectedProducts={selectedProducts}
            addProduct={addProduct}
            updateQuantity={updateQuantity}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
