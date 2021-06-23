import React from 'react';
import {Pokemons} from "./containers/Pokemons";
import PokemonContextProvider from "./context/PokemonContext";


function App() {
    return (
        <PokemonContextProvider>
            <Pokemons/>
        </PokemonContextProvider>
    );
}

export default App;
