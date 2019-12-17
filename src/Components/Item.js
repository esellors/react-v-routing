import React from 'react';

export default function Item(props) {
    console.log(props)
    return (
        <>
            <h1>Item Component</h1>
            <h2>You are at: {props.location.pathname}</h2>
            <h3>The product ID is {props.match.params.itemId}</h3>
        </>
    )
}
