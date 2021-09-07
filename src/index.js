import React from "react";
import { render } from "react-dom";

import Provider from "./Provider";
import Input from "./Input";
import InputTitle from "./InputTitle";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <Provider style={styles}>
    <Input />
    <InputTitle />
  </Provider>
);

render(<App />, document.getElementById("root"));
