import React, {useState} from "react";
import {useFetch} from "../hooks/useFetch";

export default function HooksPersonalizado() {

    //console.log(useFetch());
    let url = 'https://pokeapi.co/api/v2/pokemons/';
    url='https://jsonplaceholder.typicode.com/userss';

    let {data, isPending, error} = useFetch(url);

    return (
        <>
            <h2>Hooks personalizado</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>{JSON.stringify(error)}</mark>
            </h3>
            <h3>
                <pre style={{whiteSpace:"pre-wrap"}}>{JSON.stringify(data)}</pre>
            </h3>
        </>
    )
}
