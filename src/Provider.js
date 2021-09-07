import React, { useState } from "react";

export const Context = React.createContext();

const Provider = (props) => {
  const aCallback = () => {
    alert("Колбек на клик");
    setName("");
  };

  const [name, setName] = useState("Нешто");

  return (
    <Context.Provider
      value={{
        name,
        updateName: (name) => setName(name),
        aCallback: aCallback
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
