import React, { useState } from 'react';

import Item from './Item'

export default function Glavna(props) {


    const [lista, dodajLista] = useState([])

    function dodaj_item(){
        const input = document.getElementById('dodaj'),
            input_value = input.value;

        if (!input_value){
            alert('Внеси листа')
            return;
        }

        dodajLista([...lista, input_value])
        input.value = '';
    }


    function PrikaziLista(props) {
        return (
            <ol>
                {props.lista.map((mes, index) => <Item key={index} item={mes} />)}
            </ol>
        )
    }


    return (
        <div style={props.style}>

            <h4>Листа ({lista.length}):</h4>

            <PrikaziLista lista={lista} />

            <div>
                <input
                    type="text"
                    id="dodaj"
                />
                <button onClick={(e) => dodaj_item()}>Внеси</button>
            </div>

        </div>
    )

}
