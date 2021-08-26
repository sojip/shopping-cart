import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "../styles/Cart.css";
function Cart(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let cart = props.cart;
    setItems([...cart]);
  }, [props.cart]);
  let domItems = items.map((item) => {
    return (
      <CartItem
        id={item.id}
        key={item.id}
        item={item}
        increaseQuantity={props.increaseQuantity}
        decreaseQuantity={props.decreaseQuantity}
      />
    );
  });
  return (
    <div className="cart">
      <div className="cartContent">{domItems}</div>
    </div>
  );
}

export default Cart;
