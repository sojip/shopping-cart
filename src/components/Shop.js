import { useState, useEffect } from "react";
import Item from "../components/Item";
import "../styles/Shop.css";

function Shop() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function getDatas() {
      let response = await fetch("https://fakestoreapi.com/products");
      let json = await response.json();
      setDatas(json);
    }
    getDatas();
  }, []);

  const items = datas.map((data) => {
    return <Item id={data.id} key={data.id} data={data} />;
  });

  return <div className="itemsContainer">{items}</div>;
}

export default Shop;
