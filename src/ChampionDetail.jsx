import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

function ChampionDetail({ champion, onBack }) {
  const [fullData, setFullData] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = champion.id;

  useEffect(() => {
    axios.get(`https://ddragon.leagueoflegends.com/cdn/14.10.1/data/pt_BR/champion/${id}.json`)
      .then(response => {
        setFullData(response.data.data[id]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner animation="border" />;

  if (!fullData) return <p>Erro ao carregar os detalhes do campeão.</p>;

  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`;

  return (
    <div className="mt-4">
      <Button variant="secondary" onClick={onBack} className="mb-3">Voltar</Button>
      <h2>{fullData.name} - <small>{fullData.title}</small></h2>
      <img src={imageUrl} alt={fullData.name} className="img-fluid my-3" />
      <p>{fullData.lore}</p>
    </div>
  );
}

export default ChampionDetail;
