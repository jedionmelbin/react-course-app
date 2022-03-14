import {React, Component} from "react";

export default class EventosES6 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contador: 0
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e) {
        console.log("Sumar");
        this.setState(
            {
                contador: this.state.contador + 1
            }
        )
    }

    restar(e) {
        console.log("Restar");
        this.setState(
            {
                contador: this.state.contador - 1
            }
        )
    }

    render() {

        return (
            <div>
                <h2>Evento en componentes ES6</h2>
                <nav>
                    <button type="button" onClick={this.sumar}>+</button>
                    <button type="button" onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

//Properties inizializer

export class EventosES7 extends Component {

    state = {
        contador: 0
    };

    // Arrow functions
    sumar = (e) => {
        this.setState(
            {
                contador: this.state.contador + 1
            }
        )
    }

    restar = (e) => {
        this.setState(
            {
                contador: this.state.contador - 1
            }
        )
    }

    render() {

        return (
            <div>
                <h2>Evento en componente ES7</h2>
                <nav>
                    <button type="button" onClick={this.sumar}>+</button>
                    <button type="button" onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

function Boton(props) {
    return (<button onClick={props.myOnClick}>Boton hecho componente</button>);
}

const BotonPrimary = (props) => (
    <button onClick={props.myOnClick}>Evento</button>
);


export class MasSobreEventos extends Component {

    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(mensaje);
    }

    /*Evento pesonlizado */
    //
    render() {
        return (
            <div>
                <h2>Mas Sobre eventos</h2>
                <button type="button" onClick={(e) =>
                    this.handleClick(e, 'Hola')}>Saludar
                </button>
                <Boton myOnClick={(e) => this.handleClick(e, 'Hola mensaje')}/>
                <BotonPrimary myOnClick={(e) => this.handleClick(e, 'Hola mensaje')}/>
            </div>
        );
    }
}
