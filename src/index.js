import React from "react";
import { render } from "react-dom";

import Provider from "./Provider";
import Input from "./Input";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const parent_1 = {
  width: '45%',
  padding: '2%',
  border: '1px solid #7d7d7d'
}

const App = () => (
  <Provider style={styles}>
    <div style={parent_1}>
      <Input />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
