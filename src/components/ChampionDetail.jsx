import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { ButtonLoL } from './ButtonLoL';
import { ContainerGrid } from './ContainerGrid';

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
    <section className="relative mt-4 w-full min-h-screen">
        <div className='relative bg-gradienwhitetransparent dark:bg-gradienblacktransparent w-full min-h-screen z-20 py-10 transition-all duration-300 ease-in-out' >
          <ContainerGrid className='relative' >
            <div className='max-w-screen-md flex flex-col items-start justify-start gap-3 pb-7' >
              <div className='flex items-center gap-5' >
                <button
                    onClick={onBack}
                    className={`border-8 border-primaryGold py-2 px-6 flex items-center justify-center gap-2 transition-all duration-200 dark:bg-gradienButton bg-white dark:bg-dark hover:bg-gradient-button hover:bg-gradienButton`}
                >
                  <p className="text-primaryGold dark:text-white" >
                    Voltar
                  </p>
                </button>
                <h2 className='text-6xl text-primaryGold' >{fullData.name}</h2>
              </div>
              <small className='text-2xl text-primaryGold' >{fullData.title}</small>
            </div>
            <div className='max-w-screen-md border-y-8 border-primaryGold py-6' >
              <p className='text-primaryGold text-2xl' >{fullData.lore}</p>
            </div>
            <div className='mt-10 flex items-start max-w-screen-md  w-full h-full min-h-52' >
              <ul className='w-full border-r-8 border-primaryGold h-full' >
                <h5 className='text-center text-primaryGold text-3xl mb-3' >Atributos</h5>
                <li className='flex items-center gap-5' ><img src="./icons/icons_game/icon_class_Todos.svg" alt="" /> teste</li>
              </ul>
              <ul className='w-full' >
                <h5 className='text-center text-primaryGold text-3xl mb-3' >Estastiticas</h5>
                <li className='flex items-center gap-5' ><img src="./icons/icons_game/icon_class_Todos.svg" alt="" /> teste</li>
              </ul>
            </div>
          </ContainerGrid>
        </div>
        <img src={imageUrl} alt={fullData.name} className="img-fluid my-3 top-0 absolute w-full h-full z-10" />
    </section>
  );
}

export default ChampionDetail;
