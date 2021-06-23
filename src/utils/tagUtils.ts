import {POKEMON_TYPE} from "../models/pokemon";

export const getTagColor = (tag: POKEMON_TYPE) => {
    switch (tag) {
        case POKEMON_TYPE.NORMAL:
            return '#BED2D3';
        case POKEMON_TYPE.FIGHTING:
            return 'lightblue';
        case POKEMON_TYPE.FLYING:
            return 'blue';
        case POKEMON_TYPE.POISON:
            return 'lime';
        case POKEMON_TYPE.GROUND:
            return 'geekblue';
        case POKEMON_TYPE.ROCK:
            return 'gold';
        case POKEMON_TYPE.BUG:
            return '#A08888';
        case POKEMON_TYPE.GHOST:
            return 'grey';
        case POKEMON_TYPE.STEEL:
            return '#8894A0';
        case POKEMON_TYPE.FIRE:
            return 'red';
        case POKEMON_TYPE.WATER:
            return 'purple';
        case POKEMON_TYPE.GRASS:
            return 'green';
        case POKEMON_TYPE.ELECTRIC:
            return 'magenta';
        case POKEMON_TYPE.PSYCHIC:
            return 'lightgreen';
        case POKEMON_TYPE.ICE:
            return 'cyan';
        case POKEMON_TYPE.DRAGON:
            return 'volcano';
        case POKEMON_TYPE.DARK:
            return 'darkgrey';
        case POKEMON_TYPE.FAIRY:
            return 'orange';
        case POKEMON_TYPE.UNKNOWN:
            return 'gray';
        case POKEMON_TYPE.SHADOW:
            return '#3C3C3C';

    }
}