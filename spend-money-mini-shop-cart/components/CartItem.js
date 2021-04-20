import React from "react";

const CartItem = ({ item }) => {
  return (
    <div>
      {item.title} x {item.amount}
    </div>
  );
};
export default CartItem;
