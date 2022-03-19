import logo from './logo.svg';
import './App.css';
import Propiedades from "./components/Propiedades";
import Componente from "./components/Componente";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import Eventos from "./components/Eventos";
import EventosES6, {EventosES7, MasSobreEventos} from "./components/EventosES6";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";

function App() {
    return (
        <div className="App">

            <Componente mgs="Hola componente"/>
            <Propiedades cadena="Esto es una cadena"
                         arreglo={[1, 2, 3, 5, 6]}
                         alementoReact={<i>Hola elemento</i>}
                         objeto={{nombre: "Jedion Melbin", email: "jedionmelbin@gmail.com"}}
                         componentReact={<Componente mgs="Mensaje de propiedad"/>}
            />
            <Estado/>
            <RenderizadoCondicional/>
            <RenderizadoElementos/>
            <Eventos/>
            <EventosES6/>
            <EventosES7/>
            <MasSobreEventos/>
            <ComunicacionComponentes/>
            <CicloVida/>
            <AjaxApis/>
            <ContadorHooks titulo="Contador de seguirdores"/>
            <ScrollHooks/>
        </div>
    );
}

export default App;
