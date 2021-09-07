import React, { useState } from "react";

export const Kontekst = React.createContext();

const Provider = (props) => {
  const izbrisiIme = () => {
    alert("Бришење");
    setIme("");
  };

  const [ime, setIme] = useState("Нешто");

  return (
    <Kontekst.Provider
      value={
        {
          ime,
          promeniIme: (ime) => setIme(ime),
          izbrisiIme: izbrisiIme
        }
      }
    >
      {props.children}
    </Kontekst.Provider>
  );
};

export default Provider;
