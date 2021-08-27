import "./App.css";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [itemsNum, setItemsNum] = useState(0);
  const [datas, setDatas] = useState([]);

  function transferDatas(datas) {
    setDatas([...datas]);
  }

  function addToCart(e) {
    setItemsNum(itemsNum + 1);
    let itemId = Number(e.target.parentNode.getAttribute("id"));
    //check if item has already been selected
    let item = cart.find((item) => {
      return item.id === itemId;
    });
    if (item)
      setCart(
        cart.map((item_) => {
          if (item_.id === item.id) item_.quantity++;
          return item_;
        })
      );
    else {
      let data = datas.find((element) => {
        return element.id === itemId;
      });
      let item = { ...data, quantity: 1 };
      setCart([...cart, item]);
    }
  }

  function decreaseQuantity(e) {
    setItemsNum(itemsNum - 1);
    let id = Number(e.target.parentNode.dataset.id);
    let item = cart.find((item) => {
      return item.id === id;
    });
    if (item.quantity === 1) {
      setCart(cart.filter((element) => element.id !== id));
      return;
    }
    setCart(
      cart.map((element) => {
        if (element.id === item.id) element.quantity--;
        return element;
      })
    );
  }

  function increaseQuantity(e) {
    setItemsNum(itemsNum + 1);
    let id = Number(e.target.parentNode.dataset.id);
    let item = cart.find((item) => {
      return item.id === id;
    });
    setCart(
      cart.map((element) => {
        if (element.id === item.id) element.quantity++;
        return element;
      })
    );
  }

  return (
    <Router>
      <div className="App">
        <Nav itemsNum={itemsNum} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/shop"
            render={(props) => (
              <Shop
                {...props}
                transferDatas={transferDatas}
                addToCart={addToCart}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <Cart
                {...props}
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
