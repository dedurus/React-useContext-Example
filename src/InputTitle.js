import React, { useContext } from "react";
import { Context } from "./Provider";

const css = {
  color: "red",
  fontWeigth: 800
};

const InputTitle = () => {
  const { name } = useContext(Context);

  return (
    <div>
      <b>context</b> во <i>Provider</i> е :<span style={css}>{name}</span>
    </div>
  );
};

export default InputTitle;
