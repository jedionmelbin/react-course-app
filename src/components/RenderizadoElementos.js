import {Component} from "react";
import data from '../helpers/data.json'

function ElementoLista(props){
    return (
      <li>
          <a href={props.el.web} target="_blank">{props.el.name}</a>
      </li>
    );
}

export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño"]
        };
    }

    render() {
        console.log(data);
        return (
            <div>
                <h3>Renderizado de elementos</h3>
                <h4>Estaciones del año</h4>
                <ol>
                    {
                        this.state.seasons.map((el) =>
                            <li key={el}>{el}</li>
                        )
                    }
                </ol>
                <h3>Framwrowks FrontEnd javascript</h3>
                <ul>
                    {
                        data.frameworks.map((element,index)=> (
                            <ElementoLista key={index} el={element}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
