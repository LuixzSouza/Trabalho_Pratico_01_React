import React from 'react';
import { Card } from 'react-bootstrap';

function ChampionCard({ champion, onClick }) {
  const { id, name, title, key, info, stats } = champion;
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`;

  return (
    <Card onClick={onClick} style={{ cursor: 'pointer' }}>
      <Card.Img variant="top" src={imageUrl} alt={`Imagem de ${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text style = {{ fontSize: '0.85rem'}}>
          <strong>ID Numérico{ key }</strong>
          <strong>Ataque: {info.attack}</strong>
          <strong>Defesa: {info.defense}</strong>
          <strong>Magia: {info.magic}</strong>
          <strong>Dificuldade: {info.difficulty}</strong>
          <strong>Vida base: {stats.hp}</strong>
          <strong>Dano base: {stats.attackdamage}</strong>
          <strong>Velcoidade: {stats.movespeed}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ChampionCard;
