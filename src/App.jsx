import { useState } from "react";
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
        <Products
          addProduct={addProduct}
          updateQuantity={updateQuantity}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      );
      break;
    case "cart":
      activePage = (
        <Shoppingcart
          addProduct={addProduct}
          updateQuantity={updateQuantity}
          selectedProducts={selectedProducts}
          page={page}
          setPage={setPage}
          setSelectedProducts={setSelectedProducts}
        />
      );
      break;
    case "checkout":
      activePage = (
        <Checkout
          addProduct={addProduct}
          updateQuantity={updateQuantity}
          selectedProducts={selectedProducts}
          page={page}
          setPage={setPage}
          setSelectedProducts={setSelectedProducts}
        />
      );
      break;
    default:
      activePage = (
        <Products
          addProduct={addProduct}
          updateQuantity={updateQuantity}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      );
  }

  return (
    <div className="bg-secondary bg-gradient">
      <NavbarComponent page={page} setPage={setPage} />
      <section style={{ paddingTop: "15vh" }}>{activePage}</section>
    </div>
  );
};

export default App;
