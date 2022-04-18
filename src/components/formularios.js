import React, {useState} from "react";

export default function Formularios() {
    const [nombre, setNombre] = useState("");
    const {sabor, setSabor} = useState('');

    const handleChange = () => {

    }
    
    return (
        <>
            <h2>Formularios</h2>
            <form>
                <label htmlFor="nombre">Nombre </label>
                <input type="text" id="nombre" name="nombre" value={nombre}
                       onChange={(e) => setNombre(e.target.value)}/>

                <p>Elige tu sabor JS Favorito</p>
                <input type="radio" id="val" name="sabor" value="val" onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="val">Vanilla</label>
                <input type="radio" id="react" name="sabor" value="react" onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="react">react</label>
                <input type="radio" id="angular" name="sabor" value="angular" onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="angular">angular</label>
            </form>
        </>
    );
}
