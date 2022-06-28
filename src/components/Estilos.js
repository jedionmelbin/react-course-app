import React from "react";
import '../Estilos.css';
import moduleStyles from './Estilos.module.css';
import './Estilos.scss';

export default function Estilos() {
    let myStyles = {
        borderRadius: '.5rem',
        margin: "2rem auto",
        maxWidth: '50px'
    }
    return (
        <section className="estilos">
            <h1>Estilos CSS en React</h1>
            <h3 className="bg-react">Hola mundo</h3>
            <h3 className="bg-react" style={{borderRadius: '.25rem', margin: '1rem'}}>Estilos en linea</h3>
            <h3 className="bg-react" style={myStyles}>Estilos en linea</h3>
            <h3 className={moduleStyles.success}>Estilos con modulos success</h3>
            <h3 className={moduleStyles.error}>Estilos con modulos error</h3>
            <h3 className="bg-sass">Estilos con SASS</h3>
        </section>
    )
}
