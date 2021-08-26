import "../styles/CartItem.css";

const CartItem = (props) => {
  let price = props.item.price * props.item.quantity;
  return (
    <div className="cartItems" id={props.id}>
      <img src={props.item.image} alt="" />
      <button onClick={props.decreaseQuantity}>-</button>
      <span>{props.item.quantity}</span>
      <button onClick={props.increaseQuantity}>+</button>
      <br></br>
      <span>{price}$</span>
    </div>
  );
};

export default CartItem;
