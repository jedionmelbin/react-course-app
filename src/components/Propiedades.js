import React from "react";
import PropTypes from "prop-types";
export default function Propiedades(props) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <li>{props.cadena}</li>
            <li>{props.arreglo.join(',')}</li>
            <li>{props.alementoReact}</li>
            <li>{props.objeto.nombre}</li>
            <li>{props.componentReact}</li>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: 'Propiedad por defecto'
};

Propiedades.protoTypes = {
 numero: PropTypes.number.isRequired
}
