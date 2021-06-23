import {useContext, useEffect, useState} from "react";
import {IPageResponse} from "../../models/pageResponse";
import {getPokemons} from "../../api/pokenApi";
import {PokemonCard} from "../../components/PokemonCard";
import styles from './index.module.scss';
import {List, PageHeader, Pagination, Tag} from "antd";
import {POKEMON_TYPE} from "../../models/pokemon";
import {getTagColor} from "../../utils/tagUtils";
import Search from "antd/es/input/Search";
import {PokemonContext} from "../../context/PokemonContext";
import PokemonDrawer from "../../components/PokemonDrawer";

export const Pokemons = () => {
    const [resultPage, setResultPage] = useState<IPageResponse | undefined>();
    const [isLoading, setLoading] = useState<boolean>(false);
    const {pokemons, setPokemons} = useContext(PokemonContext)


    //search
    const [searchText, setSearchText] = useState<string>('');
    const [searchTypes, setSearchTypes] = useState<Array<POKEMON_TYPE>>([]);
    const [perPage, setPerPage] = useState<number>(20);
    const [page, setPage] = useState<number>(1);

    const loadPokemons = async () => {
        setLoading(true);
        try {
            const res = await getPokemons(page, perPage);
            setResultPage(res);
            setPokemons([...res.results]);
        } catch (e) {
            console.log(`Error while getting a list of pokemons: ${e.message}`)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        loadPokemons();
    }, [page, perPage])

    const renderTags = () => {
        return Object.keys(POKEMON_TYPE).map(key => {
                // @ts-ignore
                const type = POKEMON_TYPE[key];
                return <Tag key={type} color={getTagColor(type)}>{type}</Tag>
            }
        );
    }

    const renderPagination = () => {
        return <Pagination
            className={styles.pagination}
            showSizeChanger
            current={page}
            pageSize={perPage}
            pageSizeOptions={['10', '20', '50']}
            responsive
            onShowSizeChange={(current, size) => {
                setPerPage(size);
            }}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            defaultCurrent={page}
            total={resultPage?.count}
            onChange={(page, pageSize) => {
                pageSize && setPerPage(pageSize);
                setPage(page);
            }
            }
        />
    }

    return <div className={styles.wrapper}>
        <PageHeader
            className={styles.header}
            title="Pokedex"
            subTitle="Alina Neshchebnaya"
        />
        {/*<Search placeholder="Search name" onSearch={setSearchText}/>*/}
        {/*{renderTags()}*/}
        {renderPagination()}
        <List
            loading={isLoading}
            loadMore={<div className={styles.loadMore}/>}
            grid={{gutter: 16, column: 6}}
            className={styles.list}
            dataSource={pokemons}
            renderItem={result => (
                <List.Item>
                    <PokemonCard key={result.url} link={result.url}/>
                </List.Item>
            )}
        />
        {renderPagination()}
        <PokemonDrawer/>
    </div>
}