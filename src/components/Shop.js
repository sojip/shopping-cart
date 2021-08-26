import { useState, useEffect } from "react";
import Item from "../components/Item";
import "../styles/Shop.css";

function Shop(props) {
  const [datas, setDatas] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function getDatas() {
      let response = await fetch("https://fakestoreapi.com/products");
      let json = await response.json();
      return json;
    }
    setisLoading(true);
    let transferDatas = props.transferDatas;
    getDatas().then((json) => {
      setDatas([...json]);
      setisLoading(false);
      transferDatas(json);
    });
  }, []);

  const items = datas.map((data) => {
    return (
      <Item
        id={data.id}
        key={data.id}
        data={data}
        addToCart={props.addToCart}
      />
    );
  });

  if (isLoading) {
    return (
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          backgroundImage: "linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0,0.6))",
          top: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div class="loader"></div>
      </div>
    );
  }
  return <div className="itemsContainer">{items}</div>;
}

export default Shop;
