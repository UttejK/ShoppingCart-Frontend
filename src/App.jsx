import React, { useState } from "react";
import Products from "./components/Products";
import Shoppingcart from "./components/Shoppingcart";
import Checkout from "./components/Checkout";
import NavbarComponent from "./components/Navbar";

const App = () => {
  const [page, setPage] = useState("product");

  let activePage;
  switch (page) {
    case "product":
      activePage = <Products />;
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
