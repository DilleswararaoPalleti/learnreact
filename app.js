import React from "react";
import ReactDOM from "react-dom/client";

/*
-Header
  -logo
  -nav-items
-Body
  -search
  -restaurant container
    -restaurant carditems
    -img
    -name of the restaurant
-footer
  -copyright
  -links
  -address
  -contacts
*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTNnOr72cHwJqFdJSIsUG7El-XZMkPKxLNxIVbvFmfQ&s=10"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Restaurantcard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alter="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2026/6/21/e636a3d5-0617-464c-8393-d8d677092dca_03b08987-7784-4240-8735-c42071294dca.jpg"
      ></img>
      <div className="description">
        <h3>Paradise foods</h3>
        <h4>&#9734; 4.5</h4>
        <p>Biryani,Tandoor chicken</p>
        <p>Gajuwaka</p>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/*restaurant*/}
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(headcomonent);
