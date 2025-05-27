// Api.js
export async function buscarAtletas(nome) {
  const baseUrl = `https://api-football-v1.p.rapidapi.com/v3/players?search=${encodeURIComponent(nome)}&season=2023&league=61`;
  const headers = {
    'X-RapidAPI-Key': 'e1d127434amsh470a50186441d7fp1ef2b6jsn798905f725e0',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  };

  let todosAtletas = [];
  let paginaAtual = 1;
  let totalPaginas = 1;

  try {
    do {
      const response = await fetch(`${baseUrl}&page=${paginaAtual}`, { method: 'GET', headers });
      const data = await response.json();

      console.log(`Página ${paginaAtual}:`, data.response);

      todosAtletas = [...todosAtletas, ...data.response];

      // Verifica se há mais páginas
      const { current, total } = data.paging;
      paginaAtual = current + 1;
      totalPaginas = total;

    } while (paginaAtual <= totalPaginas);

    return todosAtletas;

  } catch (error) {
    console.error('Erro ao buscar atletas:', error);
    return [];
  }
}
