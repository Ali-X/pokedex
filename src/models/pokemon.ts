export interface IPokemon {
    name: string,
    height: number,
    weight: number,
    types: Array<IPokemonType>,
    abilities: Array<IPokemonAbility>,
    sprites: {
        front_default: string,
        other: {
            dream_world: {
                front_default: string
            },
            'official-artwork': {
                front_default: string
            }
        }
    }
    stats: Array<{
        "base_stat": number,
        "stat": {
            "name": "hp",
        }
    }>,
}

export interface IPokemonType {
    type: {
        name: POKEMON_TYPE,
        url: string
    }
}

export interface IPokemonProperty {
    name: string,
    url: string
}

export interface IPokemonAbility {
    ability: IPokemonProperty
}

export enum POKEMON_TYPE {
    NORMAL = 'normal',
    FIGHTING = 'fighting',
    FLYING = 'flying',
    POISON = 'poison',
    GROUND = 'ground',
    ROCK = 'rock',
    BUG = 'bug',
    GHOST = 'ghost',
    STEEL = 'steel',
    FIRE = 'fire',
    WATER = 'water',
    GRASS = 'grass',
    ELECTRIC = 'electric',
    PSYCHIC = 'psychic',
    ICE = 'ice',
    DRAGON = 'dragon',
    DARK = 'dark',
    FAIRY = 'fairy',
    UNKNOWN = 'unknown',
    SHADOW = 'shadow',
}