import {React, Component} from "react";

export default class ComunicacionComponentes extends Component {

    state = {
        contador: 0
    };

    incrementadorContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        });
    }
    render() {
        return (
            <div>
                <h2>Comunicacion entre componentes</h2>
                <p>Contador <b>{this.state.contador}</b></p>
                <Hijo incrementadorContador={this.incrementadorContador} mensaje="Hola mensaje para hijo 1"/>
                <Hijo incrementadorContador={this.incrementadorContador} mensaje="Hola mensaje para hijo 2"/>
            </div>
        );
    }
}

function Hijo(props) {
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementadorContador}>+</button>
        </>
    );
}
