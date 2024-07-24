import { useState } from "react";

export const UserDetails = () => {
  const [user, setUser] = useState({ name: "Ram", age: 22 });
  function changeName(e) {
    setUser((oldState) => {
      return { ...oldState, name: e.target.value };
    });
  }
  function changeAge(e) {
    setUser((oldState) => {
      return { ...oldState, age: e.target.value };
    });
  }
  //   const [userName, setUserName] = useState("Ram");
  //   const [userAge, setUserAge] = useState(22);

  // const [user, setUser] = useState({ name: "Ram", age: 22 });

  // const updateUserName = () => {
  //   // setUserName("Sam");
  //   // userName == "Ram" ? setUserName("Sam") : setUserName("Ram");
  //   setUser({ ...user, name: "sam" });
  // };
  // const updateUserAge = () => {
  //   // setUserAge(46);
  //   // userAge == 22 ? setUserAge(45) : setUserAge(22);
  //   setUser({ ...user, age: 25 });
  // };

  return (
    <>
      <h2>
        {user.name}, {user.age}
      </h2>
      {/* <h1>User Details</h1>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      <button onClick={updateUserName}> Update User Name</button>
      <button onClick={updateUserAge}> Update User Age</button> */}
      <form>
        <input
          type="text"
          placeholder="Enter User Name"
          onChange={changeName}
          value={user.name}
        />
        <input
          type="text"
          placeholder="Enter User Age"
          onChange={changeAge}
          value={user.age}
        />
      </form>
    </>
  );
};
