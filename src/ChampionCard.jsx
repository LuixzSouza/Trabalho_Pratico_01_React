import React from 'react';
import { Card } from 'react-bootstrap';

function ChampionCard({ champion }) {
  const { id, name, title, blurb } = champion;
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`;

  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} alt={`Imagem de ${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text style={{ fontSize: '0.9rem' }}>
          {blurb.length > 120 ? blurb.slice(0, 120) + '...' : blurb}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ChampionCard;
