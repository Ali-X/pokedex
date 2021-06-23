import axios from "axios";
import {IPageResponse} from "../models/pageResponse";
import {IPokemon} from "../models/pokemon";

export const getPokemons = async (pageNumer = 1, perPage = 20): Promise<IPageResponse> => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/', {
        params: {
            offset: (pageNumer - 1) * perPage,
            limit: perPage
        }
    });

    return response.data;
};

export const getPokemon = async (link: string): Promise<IPokemon> => {
    const response = await axios.get(link);

    return response.data;
};
