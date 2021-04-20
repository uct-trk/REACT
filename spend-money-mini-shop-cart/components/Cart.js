import CartItem from "./CartItem";

const Cart = ({ cart, total, resetCart }) => {
  return (
    <>
      {cart.map((item, id) => (
        <CartItem key={id} item={item} />
      ))}
      {total > 0 && <div>Total: $ {total}</div>}
      <button onClick={resetCart}>Reset Cart</button>
    </>
  );
};
export default Cart;
