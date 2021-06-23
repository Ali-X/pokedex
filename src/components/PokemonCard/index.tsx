import {Card, Skeleton, Tag} from "antd";
import {useContext, useEffect, useState} from "react";
import {IPokemon} from "../../models/pokemon";
import {getPokemon} from "../../api/pokenApi";
import styles from './index.module.scss';
import {getTagColor} from "../../utils/tagUtils";
import {PokemonContext} from "../../context/PokemonContext";
import {getImage} from "../../utils/pokemonUtils";

interface IPokemonCardProps {
    link: string
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({link}) => {
    const [pokemon, setPokemon] = useState<IPokemon | undefined>();
    const {setSelectedPokemon} = useContext(PokemonContext)

    useEffect(() => {
        getPokemonInfoByLink(link)
    }, [link]);

    const getPokemonInfoByLink = async (pokemonLink: string) => {
        try {
            const resInfo = await getPokemon(link);
            setPokemon(resInfo)
        } catch (e) {
            console.log(`Error while getting the pokemon info: ${e.message}`)
        }
    }

    return pokemon ?
        <Card hoverable
              className={styles.card}
              onClick={() => setSelectedPokemon(pokemon)}
              cover={<img alt={pokemon.name} src={getImage(pokemon)} className={styles.img}/>}
        >
            <div className={styles.title}>{pokemon.name}</div>
            <div className={styles.label}>Type</div>
            <div className={styles.tags}>
                {
                    pokemon.types.map((type, index) => (
                        <Tag key={index} color={getTagColor(type.type.name)}>{type.type.name}</Tag>
                    ))
                }
            </div>
        </Card>
        : <Skeleton.Button active={true} className={styles.skeleton} shape={'square'}/>

}