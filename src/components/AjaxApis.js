import React, {Component} from "react";

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption> {props.name} </figcaption>
        </figure>
    );
}

export default class AjaxApis extends Component {

    state = {
        pokemons: []
    };

    componentDidMount() {
        let url = 'https://pokeapi.co/api/v2/pokemon';
        fetch(url).then((res) => res.json()).then((json) => {
            console.log(json);
            json.results.forEach((el) => {
                fetch(el.url).then((res) => res.json()).then((json) => {
                    console.log(json);
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default
                    };

                    let pokemons = [...this.state.pokemons, pokemon];
                    this.setState(
                        {
                            pokemons
                        }
                    )
                });
            });
        })
    }
//Componentes basados en clase o hooks
    render() {
        return (
            <>
                <h2>Llamadas asyncronas ajax componente clase</h2>
                {this.state.pokemons.length!==0 ? this.state.pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}></Pokemon>) : <h6>Cargado</h6>}
            </>
        )
    }
}
