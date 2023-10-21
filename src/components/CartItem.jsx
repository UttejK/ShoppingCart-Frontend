import { Card } from "react-bootstrap";
import Counter from "./Counter";

const CartItem = ({ imgSrc, itemName, price, quantity, page }) => {
  return (
    <>
      <Card className="d-flex flex-row align-items-center mb-1 shadow rounded">
        <Card.Img
          src={imgSrc}
          alt={itemName}
          style={{ width: "3.75rem", height: "3.75rem", margin: "0.5rem" }}
          className="col-md-4"
        />
        <Card.Body className="col-md-8 d-flex align-items-center flex-row">
          <Card.Text className="px-3 mt-3">
            {itemName} - Price: ₹ {price * quantity}
          </Card.Text>
          <Counter
            id={itemName}
            initialQuantity={quantity}
            page={page}
            price={price}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default CartItem;
