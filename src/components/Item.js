import "../styles/Item.css";
const Item = (props) => {
  return (
    <div className="items" id={props.id}>
      <div className="imgContainer">
        <img src={props.data.image} alt="" />
      </div>
      <p>{props.data.title}</p>
      <span>${props.data.price}</span>
      <br></br>
      <button onClick={props.addToCart}>Add To Cart</button>
    </div>
  );
};

export default Item;
