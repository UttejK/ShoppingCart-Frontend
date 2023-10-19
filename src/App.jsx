import React, { useState } from "react";
import Products from "./components/Products";
import Shoppingcart from "./components/Shoppingcart";
import Checkout from "./components/Checkout";
import NavbarComponent from "./components/Navbar";

const App = () => {
  const [page, setPage] = useState("product");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const addProduct = (id, quantity) => {
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      { id: id, quantity: quantity },
    ]);
  };

  const updateQuantity = (id, newQuantity) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  let activePage;
  switch (page) {
    case "product":
      activePage = (
        <Products addProduct={addProduct} updateQuantity={updateQuantity} />
      );
      break;
    case "cart":
      activePage = <Shoppingcart page={page} setPage={setPage} />;
      break;
    case "checkout":
      activePage = <Checkout page={page} setPage={setPage} />;
      break;
    default:
      activePage = <Products />;
  }

  return (
    <div className="bg-secondary bg-gradient">
      <NavbarComponent page={page} setPage={setPage} />
      <section style={{ paddingTop: "15vh" }}>{activePage}</section>
    </div>
  );
};

export default App;
