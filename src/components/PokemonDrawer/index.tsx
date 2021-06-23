import React, {useContext} from "react";
import {Drawer, Tag} from "antd";
import {PokemonContext} from "../../context/PokemonContext";
import styles from "./index.module.scss";
import {Column} from '@ant-design/charts';
import {ColumnConfig} from "@ant-design/charts/es/column";
import {getTagColor} from "../../utils/tagUtils";
import {getImage} from "../../utils/pokemonUtils";

const PokemonDrawer: React.FC = () => {
    const {selectedPokemon, setSelectedPokemon} = useContext(PokemonContext)

    const columnCfg: ColumnConfig = {
        data: selectedPokemon ? selectedPokemon.stats.map(stat => (
            {
                qty: stat.base_stat,
                name: stat.stat.name
            }
        )) : [],
        xField: 'name',
        yField: 'qty',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            name: {alias: 'Name'},
            qty: {alias: 'Quantity'},
        },
    };

    return <Drawer
        placement="right"
        closable={true}
        onClose={() => setSelectedPokemon(null)}
        visible={Boolean(selectedPokemon)}
        width={'50%'}
    >
        <div className={styles.drawer}>
            <div className={styles.top}>
                {selectedPokemon &&
                <img alt={selectedPokemon.name} src={getImage(selectedPokemon)}
                     className={styles.img}/>}

                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.label}>Name</div>
                        <div className={`${styles.value} ${styles.name}`}>{selectedPokemon?.name}</div>
                    </div>

                    {selectedPokemon?.height &&
                    <div className={styles.info}>
                        <div className={styles.label}>Height</div>
                        <div className={styles.value}>{`${selectedPokemon?.height} sm`}</div>
                    </div>
                    }

                    {selectedPokemon?.weight &&
                    <div className={styles.info}>
                        <div className={styles.label}>Weight</div>
                        <div className={styles.value}>{`${selectedPokemon.weight / 10} kg`}</div>
                    </div>
                    }

                    <div className={styles.info}>
                        <div className={styles.label}>Type</div>
                        <div className={styles.value}>
                            {
                                selectedPokemon?.types.map((type, index) => (
                                    <Tag key={index} color={getTagColor(type.type.name)}>{type.type.name}</Tag>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.label}>Statistic</div>
                <Column {...columnCfg} className={styles.graph}/>
            </div>
        </div>
    </Drawer>
}

export default PokemonDrawer;