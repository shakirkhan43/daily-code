// 1. Create the context
import React, { useContext, createContext } from "react";

// Context banaya
const UserContext = createContext();

const Context = () => {
  const userName = "Shakir Khan";

  return (
    // 2. Provide the context to components
    <UserContext.Provider value={userName}>
      <Parent />
    </UserContext.Provider>
  );
};

const Parent = () => {
  return <Child />;
};

const Child = () => {
  return <GrandChild />;
};

const GrandChild = () => {
  // 3. useContext se value consume ki
  const user = useContext(UserContext);
  return <h1>Hello, {user}!</h1>;
};

export default Context;
