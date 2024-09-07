function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se o campo de pesquisa estiver vazio, exibe um alerta
  
  if (!campoPesquisa) {
      alert("Digite alguma série");
      return;
  }

  // Converte o valor de pesquisa para letras minúsculas
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";

  // Itera sobre cada série na lista de séries
  for (let serie of series) {
      let nome = serie.nome.toLowerCase();
      let sinopse = serie.sinopse.toLowerCase();
      let tags = serie.tags.toLowerCase();
      let genero = serie.genero.toLowerCase();
      let emissora = serie.emissora.toLowerCase(); // Acessa corretamente agora
      let ano = serie.ano.toString(); // Converte o ano para string

      // Se nome, sinopse, tags, gênero, emissora ou ano incluírem o campo de pesquisa, adiciona à string de resultados
      if (nome.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa) || genero.includes(campoPesquisa) || emissora.includes(campoPesquisa) || ano.includes(campoPesquisa)) {
          // Constrói o HTML para cada item da série
          resultados += `
              <div class="item-resultado">
                  <h2>${serie.nome}</h2>
                  <p class="descricao-meta">${serie.sinopse}</p>
                  <p>Gênero: ${serie.genero}</p>
                  <p>Ano: ${serie.ano}</p>
                  <p>Emissora: ${serie.emissora}</p>
                  <a href="${serie.link}" target="_blank">Saiba mais</a>
              </div>
          `;
      }
  }

  // Se nenhum resultado for encontrado, exibe uma mensagem apropriada
  if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
  }

  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}




