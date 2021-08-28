import "../styles/Nav.css";
import { Link } from "react-router-dom";

const navLinkStyle = {
  color: "black",
  textDecoration: "none",
  margin: "0",
  padding: "0",
};

function Header(props) {
  return (
    <header>
      <div className="container">
        <Link style={navLinkStyle} to="/">
          <h1>FakeStore</h1>
        </Link>
      </div>
    </header>
  );
}

function Nav(props) {
  return (
    <div className="container sticky">
      <nav>
        <ul>
          <Link style={navLinkStyle} to="/shop">
            <li>Shop</li>
          </Link>

          <Link style={navLinkStyle} to="/cart">
            <li>
              <img
                src="https://img.icons8.com/glyph-neue/64/000000/shopping-cart.png"
                alt="cart"
              />
              {props.itemsNum > 0 && (
                <span id="itemsNum">{props.itemsNum}</span>
              )}
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export { Nav, Header };
