import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChampionCard from './ChampionCard';
import ChampionDetail from './ChampionDetail';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
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

  return (
    <Container>
      <h1 className="my-4 text-center">Campeões de League of Legends</h1>

      {!selectedChampion ? (
        <>
          <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
            <Button onClick={() => setFilter('Todos')}>Todos</Button>
            <Button onClick={() => setFilter('Fighter')}>Lutadores</Button>
            <Button onClick={() => setFilter('Mage')}>Magos</Button>
            <Button onClick={() => setFilter('Assassin')}>Assassinos</Button>
            <Button onClick={() => setFilter('Tank')}>Tanques</Button>
            <Button onClick={() => setFilter('Marksman')}>Atiradores</Button>
            <Button onClick={() => setFilter('Support')}>Suportes</Button>
          </div>
          <Row>
            {filtered.map((champ) => (
              <Col key={champ.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <ChampionCard champion={champ} onClick={() => setSelectedChampion(champ)} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <ChampionDetail champion={selectedChampion} onBack={() => setSelectedChampion(null)} />
      )}
    </Container>
  );
}

export default App;
