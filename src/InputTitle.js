import React, { useContext } from "react";
import { Kontekst } from "./Provider";

const ime_css = {
  color: "red",
  fontWeigth: 800
};


const InputTitle = () => {
  const { ime, test } = useContext(Kontekst);

  return (
    <div>
      <h4>Компонента за рендер</h4>
      <b>Kontekst</b> во <i>Provider</i> е :<span style={ime_css}>{ime}</span>
      <p>Ime: {test.vnes}</p>
      <p>Datum: {test.datum}</p>
      <p>Vreme: { test.vreme } </p>
    </div>
  );
};

export default InputTitle;
