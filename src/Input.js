import React, { useContext } from "react";
import { Context } from "./Provider";
import InputTitle from "./InputTitle";

const Input = () => {
  const { name, updateName, aCallback } = useContext(Context);

  return (
    <div>
      <InputTitle />
      <div>
        <InputTitle />
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => updateName(e.target.value)}
          />
        </div>
        <button onClick={aCallback}>Избриши</button>
      </div>
    </div>
  );
};

export default Input;
