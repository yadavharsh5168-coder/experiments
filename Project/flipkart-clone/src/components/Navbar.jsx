import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Navbar({ cartCount }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="navbar">

      <img
        src="/images/flipkart-logo.png"
        className="logo"
      />

      <div className="searchBox">

        <input
          type="text"
          placeholder="Search for products"
        />

        <FaSearch className="searchIcon" />

      </div>

      <button
        className="loginBtn"
        onClick={handleLogin}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <p>Become a Seller</p>

      <div className="cart">
        <FaShoppingCart />

        <span>
          Cart ({cartCount})
        </span>

      </div>

    </div>
  )
}

export default Navbar