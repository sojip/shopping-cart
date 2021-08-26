import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const navLinkStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <nav>
      <div className="navContent">
        <Link style={navLinkStyle} to="/">
          <h1>FakeStore</h1>
        </Link>

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
      </div>
    </nav>
  );
}

export default Nav;
