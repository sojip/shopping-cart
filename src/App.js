import "./App.css";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { Nav, Header } from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [itemsNum, setItemsNum] = useState(0);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setItemsNum(
      cart.reduce((accumulator, item) => {
        return accumulator + item.quantity;
      }, 0)
    );
  }, [cart]);

  function transferDatas(datas) {
    setDatas([...datas]);
  }

  function addToCart(e) {
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
        <Header />
        <Nav itemsNum={itemsNum} />
        <Switch>
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
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
