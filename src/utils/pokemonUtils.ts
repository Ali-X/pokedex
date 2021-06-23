import {IPokemon} from "../models/pokemon";

export const getImage = (pokemon: IPokemon) => {
    return pokemon.sprites.other.dream_world.front_default
        ?? pokemon.sprites.front_default
        ?? pokemon.sprites.other["official-artwork"].front_default;
}