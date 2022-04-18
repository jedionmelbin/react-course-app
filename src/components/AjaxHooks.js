import React, {useState, useEffect} from "react";

function Pokemon({avatar, name}) {
    return (
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption> {name} </figcaption>
        </figure>
    );
}


export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);
    /* useEffect(() => {
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

                      setPokemon((pokemons) => [...pokemons, pokemon]);

                  });
              });
          })
      }, []);*/

    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url),
                json = await res.json();
            //console.log(json);

            for (const el of json.results) {
                let res = await fetch(el.url),
                    json = await res.json();

                //console.log(json);
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);
            }
        };

        getPokemons("https://pokeapi.co/api/v2/pokemon/");

    }, []);

    return (
        <>
            <h2>Llamadas asyncronas ajax en hooks</h2>
            {pokemons.length !== 0 ? pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>) :
                <h6>Cargado</h6>}
        </>
    );
}
