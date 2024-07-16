// import React from "react";

// export const Header = () => {
//   return React.createElement(
//     "div",
//     null,
//     React.createElement("h1", { className: "bannerText" }, "Hello World"),
//     React.createElement(
//       "h3",
//       { className: "slogan" },
//       "You're Welcome to my World!!"
//     )
//   );
// };
export const Header = () => {
  return (
    <>
      <div>
        <h1 className="bannerText">Hello World</h1>
        <p className="slogan">You're Welcome to my World!!</p>
      </div>
    </>
  );
};
