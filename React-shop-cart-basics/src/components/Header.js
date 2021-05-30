import React from "react";
import "./../styles.css";

const Header = ({ countCartItems }) => {
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>
        <a href="#/signin">Sign in</a>
      </div>
    </header>
  );
};

export default Header;
