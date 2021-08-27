import "../styles/CartItem.css";

const CartItem = (props) => {
  let price = props.item.price * props.item.quantity;
  return (
    <div className="cartItems" id={props.id}>
      <img src={props.item.image} alt="" />
      <div className="details" data-id={props.id}>
        <div>{props.item.title}</div>
        <button onClick={props.decreaseQuantity}>-</button>
        <span id="quantity">{props.item.quantity}</span>
        <button onClick={props.increaseQuantity}>+</button>
        <br></br>
        <span>$ {price}</span>
      </div>
    </div>
  );
};

export default CartItem;
