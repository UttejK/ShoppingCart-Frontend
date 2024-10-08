import { Card } from "react-bootstrap";
import Counter from "./Counter";

const Product = ({ id, cardImageURL, cardTitle, cardText, initialCount }) => {
  const price = cardTitle[0];
  const name = cardTitle[1];
  return (
    <div>
      <Card
        style={{ width: "18rem", background: "rgb(237, 255, 234)" }}
        className="d-flex align-items-center shadow"
      >
        <Card.Img variant="top" src={cardImageURL} />
        <Card.Body
          className="d-flex flex-column align-items-center"
          style={{ width: "90%" }}
        >
          <Card.Title
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>₹ {cardTitle[0]}</span>
            <span>{cardTitle[1]}</span>
          </Card.Title>
          <Card.Text className="text-break">
            <br />
            {cardText}
          </Card.Text>

          <Counter
            imgUrl={cardImageURL}
            id={id}
            price={price}
            initialQuantity={initialCount}
            page={"product"}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
