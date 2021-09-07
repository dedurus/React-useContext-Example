import React from "react";
import { render } from "react-dom";

import Provider from "./Provider";
import Input from "./Input";
import Glavna from "./Glavna";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}
const main_css = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '10px'
};

const parent_1 = {
  /* width: '40%', */
  padding: '2%',
  border: '1px solid #7d7d7d',
}

const App = () => (
  <div style={main_css}>

    <Provider style={styles}>
      <div style={parent_1}>

        <Input />

      </div>
    </Provider>

    <Glavna style={parent_1} />
  </div>
);

render(<App />, document.getElementById("root"));
