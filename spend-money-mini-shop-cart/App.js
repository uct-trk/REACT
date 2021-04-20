import "./styles.css";
import Header from "./components/header";
import { useEffect, useState } from "react";
import Products from "./product";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  const [money, setMoney] = useState(100);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Sepeti sıfırlamak için
  const resetCart = () => {
    setCart([]);
  };

  useEffect(() => {
    // Toplam fiyatı buluyoruz
    setTotal(
      cart.reduce((acc, item) => {
        return (
          acc +
          item.amount * Products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
    // Toplam fiyatı buluyoruz end
    console.log(cart);
  }, [cart]);

  return (
    <>
      <Header total={total} money={money} />
      {Products.map((product) => (
        <Product
          key={product.id}
          total={total}
          money={money}
          cart={cart}
          setCart={setCart}
          product={product}
        />
      ))}
      {total > 0 && <Cart cart={cart} resetCart={resetCart} total={total} />}
    </>
  );
};
export default App;
