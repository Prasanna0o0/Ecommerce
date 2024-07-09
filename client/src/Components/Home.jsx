import React from "react";
import "./Home.css";
function Home() {
  return (
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
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Signup</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
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
  );
}

export default Home;
