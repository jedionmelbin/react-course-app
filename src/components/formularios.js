import React, {useState} from "react";
/*
export default function Formularios() {
    const [nombre, setNombre] = useState("");
    const {sabor, setSabor} = useState('');
    const [lenguage, setLenguage] = useState('');
    const [termino, setTerminos] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        alert('formulartio se ha enviado')
    }

    return (
        <>
            <h2>Formularies</h2>
            <form onSubmit={handleChange}>
                <label htmlFor="nombre">Nombre </label>
                <input type="text" id="nombre" name="nombre" value={nombre}
                       onChange={(e) => setNombre(e.target.value)}/>

                <p>Elige tu sabor JS Favorito</p>
                <input type="radio" id="val" name="sabor" value="val" onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="val">Vanilla</label>
                <input type="radio" id="react" name="sabor" value="react" onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="react">react</label>
                <input type="radio" id="angular" name="sabor" value="angular" o
                       nChange={(e) => setSabor(e.target.value)} defaultChecked/>
                <label htmlFor="angular">angular</label>

                <p>Elige tu lenguage de programaicón</p>
                <select name="language" onChange={(e) => setLenguage(e.target.value)}
                        defaultValue="js">
                    <option value="" selected>---</option>
                    <option value="js">Javascript</option>
                    <option value="php">Php</option>
                    <option value="python">Python</option>
                    <option value="go">Go</option>
                    <option value="ruby">Ruby</option>
                </select>
                <br/>
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={(e) => setTerminos(e.target.checked)}/>
                <br/>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
}*/

export default function Formularios() {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleChecked= (e) => {
        setForm({
            ...form,
            [e.target.checked]: e.target.checked
        });
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        alert('formulartio se ha enviado')
    }

    return (
        <>
            <h2>Formularies</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre </label>
                <input type="text" id="nombre" name="nombre" value={form.nombre}
                       onChange={handleChange}/>

                <p>Elige tu sabor JS Favorito</p>
                <input type="radio" id="val" name="sabor" value="val" onChange={handleChange}/>
                <label htmlFor="val">Vanilla</label>
                <input type="radio" id="react" name="sabor" value="react" onChange={handleChange}/>
                <label htmlFor="react">react</label>
                <input type="radio" id="angular" name="sabor" value="angular" onChange={handleChange} defaultChecked/>
                <label htmlFor="angular">angular</label>

                <p>Elige tu lenguage de programaicón</p>
                <select name="language" onChange={handleChange}
                        defaultValue="js">
                    <option value="" selected>---</option>
                    <option value="js">Javascript</option>
                    <option value="php">Php</option>
                    <option value="python">Python</option>
                    <option value="go">Go</option>
                    <option value="ruby">Ruby</option>
                </select>
                <br/>
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked}/>
                <br/>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
}
