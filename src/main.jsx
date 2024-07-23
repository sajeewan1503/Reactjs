import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "./css/QrCode.css";

import { QrCode } from "./components/QrCode.jsx";
// import { UserCard } from "./UserCard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UserCard /> */}
    <QrCode />
  </React.StrictMode>
);
