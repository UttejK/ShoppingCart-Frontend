import { useReducer } from "react";
import { Button } from "react-bootstrap";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Component using useReducer
export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // console.log(state);

  return (
    <div>
      {state.count === 0 ? (
        <Button onClick={() => dispatch({ type: "INCREMENT" })}>
          Add to cart
        </Button>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          <Button
            variant="danger"
            onClick={() => {
              try {
                state.count === 0 ? null : dispatch({ type: "DECREMENT" });
              } catch (err) {
                console.log(err);
              }
            }}
          >
            -
          </Button>
          <span className="mx-3">{state.count}</span>
          <Button
            variant="success"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            +
          </Button>
        </div>
      )}
    </div>
  );
}
