import React, { useEffect, useState } from "react";
import { getAllProducts } from "../API/Service";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ProductListing.css";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const [cartDetails, setCartDetails] = useState([]);
  const [storedCart, setStoredCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data[0].products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem("user")) || [];
    setStoredCart(cartData);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setStoredCart([]);
  };

  const addToCart = (product) => {
    const productIndex = cartDetails.findIndex(
      (item) => item.id === product.id
    );
    if (productIndex !== -1) {
      const updatedCart = [...cartDetails];
      updatedCart[productIndex].quantity++;
      updatedCart[productIndex].totalPrice =
        updatedCart[productIndex].quantity * product.price; // Update total price
      updatedCart[productIndex].currentDate = new Date().toLocaleDateString(); // Update current date
      setCartDetails(updatedCart);
    } else {
      const newCart = [
        ...cartDetails,
        {
          id: product.id,
          title: product.title,
          sku: product.sku,
          currentDate: new Date().toLocaleDateString(),
          quantity: 1,
          price: product.price,
          totalPrice: product.price, // Initial total price
        },
      ];
      setCartDetails(newCart);
      setCartCount(cartCount + 1);
    }
  };

  const handleCartClick = () => {
    sessionStorage.setItem("main", JSON.stringify(cartDetails));
    navigate("/checkout");
  };

  console.log(cartDetails, "cartDetailscartDetailscartDetails");
  return (
    <>
      <div>
        <nav>
          <div className="nav-bar">
            <i className="bx bx-menu sidebarOpen" />
            <span className="logo navLogo">
              <a href="#">Ecom</a>
            </span>
            <div className="menu">
              <div className="logo-toggle">
                <span className="logo">
                  <a href="#">CodingLab</a>
                </span>
                <i className="bx bx-x siderbarClose" />
              </div>
              <ul className="nav-links">
                <li>
                  <a href="/sign">Signup</a>
                </li>
                <li>
                  <a href="/">Product</a>
                </li>
                {storedCart.length > 0 ? (
                  <ul>
                    <li>
                      <a href="#" onClick={handleLogout}>
                        Logout
                      </a>
                    </li>
                    <li>
                      <h5>{JSON.stringify(storedCart)}</h5>
                    </li>
                  </ul>
                ) : (
                  <div>
                    {/* <a href="/lo">Login</a> */}
                    <li>
                      <a href="/lo">Login</a>
                    </li>
                    {/* <p>No User Logged In</p> */}
                  </div>
                )}
              </ul>
            </div>
            {/* <div className="darkLight-searchBox">
            <div className="dark-light">
              <i className="bx bx-moon moon" />
              <i className="bx bx-sun sun" />
            </div>
            <div className="searchBox">
              <div className="searchToggle">
                <i className="bx bx-x cancel" />
                <i className="bx bx-search search" />
              </div>
              <div className="search-field">
                <input type="search" placeholder="Search..." />
                <i className="bx bx-search" />
              </div>
            </div>
          </div> */}
          </div>
        </nav>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="product-listing">
        <h2>Product Listing</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.images}
                alt={product.title}
                className="product-image"
              />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-icon" onClick={handleCartClick}>
          <FaShoppingCart />
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
