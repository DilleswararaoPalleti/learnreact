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
const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(headcomonent);
