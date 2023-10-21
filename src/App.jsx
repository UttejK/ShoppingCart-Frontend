import { useState } from "react";
import Products from "./components/Products";
import Shoppingcart from "./components/Shoppingcart";
import Checkout from "./components/Checkout";
import NavbarComponent from "./components/Navbar";

const App = () => {
  const [page, setPage] = useState("product");
  const [user, setUser] = useState(1);

  let activePage;
  switch (page) {
    case "product":
      activePage = <Products />;
      break;
    case "cart":
      activePage = (
        <Shoppingcart
          page={page}
          setPage={setPage}
          user={user}
          setUser={setUser}
        />
      );
      break;
    case "checkout":
      activePage = <Checkout page={page} setPage={setPage} user={user} />;
      break;
    default:
      activePage = <Products />;
  }

  return (
    <div className="bg-secondary bg-gradient">
      <NavbarComponent page={page} setPage={setPage} />
      <section
        style={{
          paddingTop: "5vh",
          background: "rgb(227, 252, 255)",
          height: "100%",
        }}
      >
        {activePage}
      </section>
    </div>
  );
};

export default App;
