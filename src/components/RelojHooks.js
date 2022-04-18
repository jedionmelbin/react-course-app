import React, {useState, useEffect} from "react";

function Reloj({hora}) {
    return <h3>{hora}</h3>
}

export default function RelojHooks() {

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let temporized;
        if (visible) {
            temporized = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        } else {
            clearInterval(temporized);
        }
        return () => {
            console.log("Fase de desmontaje");
        };
    }, [visible]);

    const iniciar = (valor) => {
        setVisible(true);
    }

    const detener = () => {
        setVisible(false);
    }

    return (
        <>
            <h2>Reloj con hooks</h2>
            {!visible && <Reloj hora={hora}/>}
            <button onClick={() => iniciar(true)}>Iniciar</button>
            <button onClick={() => detener(false)}>Detener</button>
        </>
    );
}
