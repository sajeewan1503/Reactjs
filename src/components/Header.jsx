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
  let customCSS = "code";

  const isLoggedIn = false;
  const greeting = isLoggedIn ? <p>Welcome Back!</p> : <p>Please log in</p>;
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  return (
    <>
      <div>
        <h1 className="bannerText">Hello World</h1>
        <p className="slogan">You're Welcome to my World!!</p>

        {/* Javascript Expression in JSX */}
        {/* In Code Styling */}
        <p className={customCSS} style={{ fontSize: "25px" }}>
          25 + 45={25 + 45}
        </p>
        {/* JSX with Condition Randering */}
        {greeting}

        {/* JSX with Lists */}
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
