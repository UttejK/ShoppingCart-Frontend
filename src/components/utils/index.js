const handleCartOperation = async (id, quantity, totalAmount) => {
  try {
    // Check if the product is already in the cart
    const existingCartItemResponse = await fetch(
      `http://127.0.0.1:8000/api/cart/${id}/`
    );
    const existingCartItemData = await existingCartItemResponse.json();
    console.log(existingCartItemData);

    if (existingCartItemData.length > 0) {
      // Product is already in the cart, update the quantity
      const cartItemId = existingCartItemData[0].product;
      console.log(cartItemId);

      const updatedCartItemResponse = await fetch(
        `http://127.0.0.1:8000/api/cart/${cartItemId}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: id,
            quantity: quantity + existingCartItemData[0].quantity,
            total_amount: totalAmount,
          }),
        }
      );

      if (updatedCartItemResponse.ok) {
        console.log("Item quantity updated in the cart successfully.");
        // Optionally, you can handle the response here if needed
      } else {
        console.error("Failed to update item quantity in the cart.");
      }
    } else {
      // Product is not in the cart, add it
      const addToCartResponse = await fetch("http://127.0.0.1:8000/api/cart/", {
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

      if (addToCartResponse.ok) {
        console.log("Item added to the cart successfully.");
        // Optionally, you can handle the response here if needed
      } else {
        console.error("Failed to add item to the cart.");
      }
    }
  } catch (error) {
    console.error("Error updating cart:", error);
  }
};

const removeFromCart = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
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
      console.error("Failed to remove all items from the cart.");
    }
  } catch (error) {
    console.error("Error removing all items from the cart:", error);
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
  handleCartOperation,
  removeFromCart,
  removeAllItemsFromCart,
  addToPurchase,
};
