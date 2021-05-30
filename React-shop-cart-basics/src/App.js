import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles.css";
import data from "./data";
import { useState } from "react";

export default function App() {
  // destructurıng
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // eger urun ekliyse
    // ıf the product exist
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      // eğer urun daha onceden ekli değilse
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // eğer üründen son bir tana kaldıyas onu silmek için
  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      // elimizde daha ürün varsa onları tek tek silmek için
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}/>
      <div className="row">
        <Main addToCart={addToCart} products={products} />
        <Cart
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          cartItems={cartItems}
        />
      </div>
    </div>
  );
}
