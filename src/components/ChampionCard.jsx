import React from 'react';
import { Card } from 'react-bootstrap';

function ChampionCard({ champion, onClick }) {
  const { id, name, title, key, info, stats } = champion;
  const getWidthPercent = (value, max = 10) => `${(value / max) * 100}%`;
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`;

  return (
    <div className='text-primaryGold bg-card_white dark:bg-card_black bg-cover bg-no-repeat cursor-pointer min-w-80 max-w-80 h-auto p-7 flex flex-col items-center justify-center hover:scale-110 hover:shadow-2xl hover:shadow-primaryGold group transition-all duration-300 ease-in-out'  onClick={onClick}>
      <div className='relative w-full flex flex-col items-center justify-center text-center' >
        <h3 className='text-3xl' >{name}</h3>
        <p className="mb-2 text-muted text-primaryGold dark:text-white">{title}</p>
        <div className="relative w-full h-40 overflow-hidden rounded-none z-10">
          {/* Imagem principal */}
          <img
            src={imageUrl}
            alt={`Imagem de ${name}`}
            className="w-full h-full object-contain z-0"
          />

          {/* Moldura dourada por cima */}
          <img
            src="./background/pictureChamp.png" 
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            alt="Moldura"
          />
        </div>
        <div className='absolute -bottom-6 bg-filID bg-cover bg-no-repeat bg-center py-4 px-12 z-20' >
          <strong>{ key }</strong>
        </div>
      </div>
      <ul className="w-full text-sm space-y-2 mt-8">
        <li>
          <div className="flex items-center gap-2">
            <img className='invert dark:invert-0 max-w-4' src="/icons/icons_game/icon_static_ad.svg" alt="" />
            <span className="w-20">Ataque</span>
            <div className="flex-1 h-2 bg-darkFill rounded">
              <div
                className="h-full bg-gradientLineFill rounded"
                style={{ width: getWidthPercent(info.attack) }}
              ></div>
            </div>
            <span className="w-6 text-right">{info.attack}</span>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2">
            <img className='invert dark:invert-0 max-w-4' src="/icons/icons_game/icon_static_ar.svg" alt="" />
            <span className="w-20">Defesa</span>
            <div className="flex-1 h-2 bg-darkFill rounded">
              <div
                className="h-full bg-gradientLineFill rounded"
                style={{ width: getWidthPercent(info.defense) }}
              ></div>
            </div>
            <span className="w-6 text-right">{info.defense}</span>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2">
            <img className='invert dark:invert-0 max-w-4' src="/icons/icons_game/icon_static_mg.svg" alt="" />
            <span className="w-20">Magia</span>
            <div className="flex-1 h-2 bg-darkFill rounded">
              <div
                className="h-full bg-gradientLineFill rounded"
                style={{ width: getWidthPercent(info.magic) }}
              ></div>
            </div>
            <span className="w-6 text-right">{info.magic}</span>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2">
            <img className='invert dark:invert-0 max-w-4' src="/icons/icons_game/icon_static_attackRange.svg" alt="" />
            <span className="w-20">Dificuldade</span>
            <div className="flex-1 h-2 bg-darkFill rounded">
              <div
                className="h-full bg-gradientLineFill rounded"
                style={{ width: getWidthPercent(info.difficulty) }}
              ></div>
            </div>
            <span className="w-6 text-right">{info.difficulty}</span>
          </div>
        </li>
      </ul>
      <ul className='w-full flex flex-wrap items-center justify-between' >
        <li className='flex' >
          <img className='invert dark:invert-0 max-w-4' src="/icons/icons_game/icon_static_hp.svg" alt="" />
          <strong>HP: {stats.hp}</strong>
        </li>
        <li className='flex' >
          <img className='invert dark:invert-0 max-w-4' src="/icons/icons_game/icon_static_ad.svg" alt="" />
          <strong>AD: {stats.attackdamage}</strong>
        </li>
        <li className='flex' >
          <img className='invert dark:invert-0 max-w-4' src="/icons/icons_game/icon_static_attackSpeed.svg" alt="" />
          <strong>Atk Spd: {stats.movespeed}</strong>
        </li>
      </ul>
      <p className='p-4'>
        Explore
      </p>
    </div>
  );
}

export default ChampionCard;
