import Counter from "./Counter";

const CartItem = ({
  imgSrc,
  selectedProducts,
  itemName,
  id,
  price,
  addProduct,
  updateQuantity,
  setSelectedProducts,
  page,
}) => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-5 px-5 py-4">
      <span>{id}</span>
      <img
        src={imgSrc}
        alt={itemName}
        style={{ objectFit: "contain", width: "4rem" }}
      />
      <span>{itemName}</span>
      <Counter
        id={id}
        selectedProducts={selectedProducts}
        addProduct={addProduct}
        updateQuantity={updateQuantity}
        setSelectedProducts={setSelectedProducts}
        page={page}
      />
      {/* <span>{initialQuantity}</span> */}
      <span>{price.toFixed(2)}</span>
    </div>
  );
};

export default CartItem;
