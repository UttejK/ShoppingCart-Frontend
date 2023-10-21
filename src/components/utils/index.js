const insertCartItem = async (id, quantity, totalAmount) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/cart/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: id,
        quantity: quantity,
        total_amount: totalAmount,
      }),
    });

    if (response.ok) {
      console.log("Item added to the cart successfully.");
      // Optionally, you can handle the response here if needed
    } else {
      console.error("Failed to add item to the cart.");
    }
  } catch (error) {
    console.error("Error adding item to the cart:", error);
  }
};

const updateCartItem = async (id, quantity, totalAmount) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/cart/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: id,
        quantity: quantity,
        total_amount: totalAmount,
      }),
    });

    if (response.ok) {
      console.log("Item quantity updated in the cart successfully.");
      // Optionally, you can handle the response here if needed
    } else {
      console.error("Failed to update item quantity in the cart.");
    }
  } catch (error) {
    console.error("Error updating item quantity in the cart:", error);
  }
};

const deleteCartItem = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/cart/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Item removed from the cart successfully.");
      // Optionally, you can handle the response here if needed
    } else {
      console.error("Failed to remove item from the cart.");
    }
  } catch (error) {
    console.error("Error removing item from the cart:", error);
  }
};

const removeAllItemsFromCart = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/cart/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
    });

    if (response.ok) {
      console.log("All items removed from the cart successfully.");
      // Optionally, you can handle the response here if needed
    } else {
      // Do nothing if the cart is empty
    }
  } catch (e) {
    console.error(e);
  }
};

const addToPurchase = async (id, quantity, totalAmount) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/purchase/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
      body: JSON.stringify({
        product: id,
        quantity: quantity,
        amount_paid: totalAmount,
      }),
    });
    if (response.ok) {
      console.log("Item added to the purchase successfully.");
      // Optionally, you can handle the response here if needed
    } else {
      console.error("Failed to add item to the purchase.");
    }
  } catch (error) {
    console.error("Error adding item to the purchase:", error);
  }
};

export {
  insertCartItem,
  updateCartItem,
  deleteCartItem,
  removeAllItemsFromCart,
  addToPurchase,
};
