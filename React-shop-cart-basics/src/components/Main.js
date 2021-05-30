import React from "react";
import "./../styles.css";
import Product from "./Product";

const Main = ({ products, addToCart }) => {
  return (
    <main className="block col-2">
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <Product addToCart={addToCart} key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Main;
