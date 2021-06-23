import React, {createContext, useState} from "react"
import {IPageResponseItem} from "../../models/pageResponse";
import {IPokemon} from "../../models/pokemon";

interface IPokemonContextProps {
    pokemons: Array<IPageResponseItem>,
    setPokemons: (pokemons: Array<IPageResponseItem>) => void,
    selectedPokemon: IPokemon | null,
    setSelectedPokemon: (pokemon: IPokemon | null) => void,
}

const defaultContext: IPokemonContextProps = {
    pokemons: [],
    setPokemons: () => {
    },
    selectedPokemon: null,
    setSelectedPokemon: () => {
    },
}

export const PokemonContext = createContext(defaultContext)

const PokemonContextProvider: React.FC = ({children}) => {
    const [pokemons, setPokemons] = useState<Array<IPageResponseItem>>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);

    return <PokemonContext.Provider value={{
        pokemons, setPokemons,
        selectedPokemon, setSelectedPokemon
    }}>
        {children}
    </PokemonContext.Provider>
}

export default PokemonContextProvider;