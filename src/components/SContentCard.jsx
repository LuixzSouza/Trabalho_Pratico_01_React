import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChampionCard from './ChampionCard';
import ChampionDetail from './ChampionDetail';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ContainerGrid } from './ContainerGrid';
import { ButtonLoL } from './ButtonLoL';

export function SContentCard() {
    const [champions, setChampions] = useState([]);
    const [filter, setFilter] = useState('Todos');
    const [selectedChampion, setSelectedChampion] = useState(null);

    useEffect(() => {
    axios.get('https://ddragon.leagueoflegends.com/cdn/14.10.1/data/pt_BR/champion.json')
        .then(response => {
        const champsArray = Object.values(response.data.data);
        setChampions(champsArray);
        })
        .catch(error => console.error('Erro ao buscar campeões:', error));
    }, []);

    const filtered = filter === 'Todos'
    ? champions
    : champions.filter(champ => champ.tags.includes(filter));
    
    return(
        <section className='bg-white/60 dark:bg-black py-8 transition-all duration-500 ease-in-out' >
            <ContainerGrid>
                <h2 className=" text-center text-4xl mb-10 text-primaryGold">Campeões de League of Legends</h2>
                {!selectedChampion ? (
                    <>
                    <div className="flex justify-center gap-2 mb-3 flex-wrap">
                       <ButtonLoL filtro="Fighter" setFilter={setFilter} filtroAtivo={filter}>Lutadores</ButtonLoL>
                        <ButtonLoL filtro="Mage" setFilter={setFilter} filtroAtivo={filter}>Magos</ButtonLoL>
                        <ButtonLoL filtro="Assassin" setFilter={setFilter} filtroAtivo={filter}>Assassinos</ButtonLoL>
                        <ButtonLoL filtro="Tank" setFilter={setFilter} filtroAtivo={filter}>Tanques</ButtonLoL>
                        <ButtonLoL filtro="Marksman" setFilter={setFilter} filtroAtivo={filter}>Atiradores</ButtonLoL>
                        <ButtonLoL filtro="Support" setFilter={setFilter} filtroAtivo={filter}>Suportes</ButtonLoL>
                        <ButtonLoL filtro="Todos" setFilter={setFilter} filtroAtivo={filter}>Todos</ButtonLoL>
                    </div>
                    <div className="mt-20 grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
                        {filtered.map((champ) => (
                        <div key={champ.id}>
                            <ChampionCard champion={champ} onClick={() => setSelectedChampion(champ)} />
                        </div>
                        ))}
                    </div>
                    </>
                ) : (
                    <ChampionDetail champion={selectedChampion} onBack={() => setSelectedChampion(null)} />
                )}
            </ContainerGrid>
        </section>
    )
}