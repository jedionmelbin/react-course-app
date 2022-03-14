import React, {Component} from "react";


export default class CicloVida extends Component {
    constructor(props) {
        super(props);
        console.log(0, "El componente inicializado no esta en el DOM");

        this.state = {
            hora: new Date().toLocaleDateString(),
            visible: false
        }

        this.temporizador = null;
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    iniciar = () => {
        this.tictac();
        this.setState(
            {
                visible: true
            }
        )
    }

    detener = () => {
        clearInterval(this.temporizador);
        this.setState(
            {
                visible: false
            }
        )
    }

    componentDidMount() {
        console.log(1, 'El componente ya se encuentra en el DOM');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(2, 'El componente ya se encuentra en el DOM');
        console.log(prevProps);
        console.log(prevState);
    }


//  <h3>{this.state.hora}</h3>
    render() {
        console.log(4, 'El componente se dibuja cambio DOM');
        return (
            <>
                <h2>Ciclo de vida ce componentes clase</h2>
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>iniciar</button>
                <button onClick={this.detener}>detener</button>
            </>
        )
    }
}

class Reloj extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log(3, 'El componente ha dido eliminado del DOM');
    }

    render() {
        return <h3>{this.props.hora}</h3>;
    }
}
