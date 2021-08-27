import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "../styles/Cart.css";
function Cart(props) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let cart = props.cart;
    setItems([...cart]);
    setTotal(
      cart.reduce(function (accumulator, element) {
        return accumulator + element.quantity * element.price;
      }, 0)
    );
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
      <div className="total">
        <h1>
          Total:
          <span> $ {total.toFixed(2)}</span>
        </h1>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
