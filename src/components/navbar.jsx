import React from "react";
import "./navbar.css";

// Stateless Functional Component

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Shopping Basket
          </a>
        </div>
      </nav>
      <div className="nav_flex">
        <span className="nav__group">
          <span>Different products: </span>
          <span className="badge badge-pill badge-secondary">
            {props.totalCounters}
          </span>
        </span>
        <span className="nav__group">
          <span>Total Qty: </span>
          <span className="badge badge-pill badge-secondary">
            {props.totalValuesCounters}
          </span>
        </span>
        <span className="nav__group">
          <span>Subtotal: </span>
          <span className="badge badge-pill badge-secondary">
            {props.totalPriceCounters}
          </span>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
