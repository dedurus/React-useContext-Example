import React, { useState } from "react";

export const Kontekst = React.createContext();

const Provider = (props) => {
  const izbrisiIme = () => {
    alert("Бришење");
    setIme("");
  };

  const [ime, setIme] = useState("Нешто");

  const [test, setTest] = useState({vnes: '', datum: '', vreme: ''});

  function setTestFunction(ime){
    let date = new Date(),
      //ime_date = ime + ' ' + date.getDate() + '/' + (date.getMonth() +1) + '/' + date.getFullYear() + ' vreme: ' + + date.getHours() + ':' +  date.getMinutes() + ':' + date.getSeconds(),
      datum = `${date.getDate()}/${(date.getMonth() +1)}/${date.getFullYear()}`,
      vreme = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      ime_date = {
        vnes: ime,
        datum: datum,
        vreme: vreme
      }

      if(ime === ''){
        ime_date.datum = '';
        ime_date.vreme = '';

      }

    setTest(ime_date)
  }

  return (
    <Kontekst.Provider
      value={
        {
          test,
          ime,
          promeniIme: (ime) => {
            setIme(ime);
            setTestFunction(ime);
          },
          izbrisiIme: izbrisiIme
        }
      }
    >
      {props.children}
    </Kontekst.Provider>
  );
};

export default Provider;
