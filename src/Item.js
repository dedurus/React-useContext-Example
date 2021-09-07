import React from 'react';

export default function Item(props){
    console.log('Item props: ', props);
    return (
        <li>{props.item}</li>
    )
}
