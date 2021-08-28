import "../styles/Home.css";
import { Link } from "react-router-dom";
import shoppingcart from "../shoppingcart.png";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    //fix the height of App
    let app = document.querySelector(".App");
    app.classList.add("fixedHeight");
    return () => {
      app.classList.remove("fixedHeight");
    };
  }, []);
  return (
    <div className="home">
      <div
        className="homeContent"
        style={{
          backgroundImage: ` url(${shoppingcart})`,
        }}
      >
        <div className="homeText">
          <span>Best fake online store</span>
          <br></br>
          <p>Choose what you want now !!!</p>
          <Link to="/shop">
            <button>Start shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
