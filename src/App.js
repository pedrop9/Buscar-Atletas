import React, { useState } from 'react';
import { buscarAtletas } from './services/Api';
import CardAtleta from './components/CardAtleta';
import PainelFavoritos from './components/PainelFavoritos';

function App() {
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const handleBuscar = async () => {
    try {
      const resultados = await buscarAtletas(nomePesquisa);
      setAtletas(resultados);
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar atletas.');
    }
  };

  const adicionarFavorito = (atleta) => {
    if (!favoritos.some(fav => fav.player.id === atleta.player.id)) {
      setFavoritos([...favoritos, atleta]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Busca de Atletas</h1>

      <div className="mb-4">
        <input
          type="text"
          value={nomePesquisa}
          onChange={(e) => setNomePesquisa(e.target.value)}
          placeholder="Digite o nome do atleta"
          className="border p-2 mr-2 rounded"
        />
        <button 
          onClick={handleBuscar}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Buscar
        </button>
      </div>

      <div className="flex flex-wrap">
        {atletas.map((atleta) => (
          <CardAtleta 
            key={atleta.player.id} 
            atleta={atleta} 
            adicionarFavorito={adicionarFavorito} 
          />
        ))}
      </div>

      <hr className="my-6" />

      <PainelFavoritos favoritos={favoritos} />
    </div>
  );
}

export default App;
