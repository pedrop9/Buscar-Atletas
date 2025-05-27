import React from 'react';

const CardAtleta = ({ atleta, adicionarFavorito }) => {
  const nome = atleta.player.name;
  const foto = atleta.player.photo;
  const idade = atleta.player.age;
  const nacionalidade = atleta.player.nationality;

  return (
    <div className="border p-4 rounded shadow m-2 w-60">
      <img src={foto} alt={nome} className="w-full h-40 object-cover mb-2 rounded" />
      <h2 className="font-bold">{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Nacionalidade: {nacionalidade}</p>
      <button 
        onClick={() => adicionarFavorito(atleta)} 
        className="bg-blue-500 text-white px-2 py-1 rounded mt-2 hover:bg-blue-600"
      >
        Adicionar aos favoritos
      </button>
    </div>
  );
};

export default CardAtleta;
