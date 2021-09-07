import React, { useContext } from "react";
import { Kontekst } from "./Provider";
import InputTitle from "./InputTitle";

const Input = () => {
  const { ime, promeniIme, izbrisiIme } = useContext(Kontekst);

  const input_css = {
    marginTop: '5%'
  }
  const btn_css = {
    marginTop: '10px'
  }

  return (
    <div>
      <InputTitle />
      <div>

        <div style={input_css}>
          <h4>Компонента за инпут</h4>
          <input
            type="text"
            value={ime}
            onChange={(e) => promeniIme(e.target.value)}
          />
        </div>
        <button style={btn_css} onClick={izbrisiIme}>Избриши</button>
      </div>
    </div>
  );
};

export default Input;
