import React from "react";
import ReactDOM from "react-dom/client";
import { UserDetails } from "./components/UserDetails";
// import App from "./App.jsx";
// import "./index.css";
// import "./css/QrCode.css";

// import { QrCode } from "./components/QrCode.jsx";
// import { Cart } from "./formSamples/Cart.jsx";
// import { UserCard } from "./UserCard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UserCard /> */}
    {/* <QrCode /> */}
    {/* <Cart /> */}
    <UserDetails />
  </React.StrictMode>
);