import React from 'react';
import CardAtleta from './CardAtleta';

const PainelFavoritos = ({ favoritos }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Painel de Favoritos</h2>
      <div className="flex flex-wrap">
        {favoritos.map((atleta, index) => (
          <CardAtleta 
            key={index} 
            atleta={atleta} 
            adicionarFavorito={() => {}}  // Botão não faz nada no painel
          />
        ))}
      </div>
    </div>
  );
};

export default PainelFavoritos;
