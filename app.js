const jogadores = [
  {
    nome: "Ulisses",
    foto: "https://i.pravatar.cc/100?img=11",
    gols: 0,
    assistencias: 0
  },
  {
    nome: "Pedro",
    foto: "https://i.pravatar.cc/100?img=12",
    gols: 0,
    assistencias: 0
  },
  {
    nome: "Paulo",
    foto: "https://i.pravatar.cc/100?img=13",
    gols: 0,
    assistencias: 0
  },
  {
    nome: "Asafe",
    foto: "https://i.pravatar.cc/100?img=14",
    gols: 0,
    assistencias: 0
  },
  {
    nome: "Alfredo",
    foto: "https://i.pravatar.cc/100?img=15",
    gols: 0,
    assistencias: 0
  },
  {
    nome: "Neto",
    foto: "https://i.pravatar.cc/100?img=16",
    gols: 0,
    assistencias: 0
  },
  {
    nome: "João Gomes",
    foto: "https://i.pravatar.cc/100?img=17",
    gols: 0,
    assistencias: 0
  },
  {
    nome: "Josué",
    foto: "https://i.pravatar.cc/100?img=18",
    gols: 0,
    assistencias: 0
  },
  {
    nome: "Davi",
    foto: "https://i.pravatar.cc/100?img=19",
    gols: 0,
    assistencias: 0
  },
  {
    nome: "Ronny",
    foto: "https://i.pravatar.cc/100?img=20",
    gols: 0,
    assistencias: 0
  },
  {
    nome: "Jocyel",
    foto: "https://i.pravatar.cc/100?img=21",
    gols: 0,
    assistencias: 0
  },
  {
    nome: "Doryedson",
    foto: "https://i.pravatar.cc/100?img=22",
    gols: 0,
    assistencias: 0
  }
];

function renderizarTabela() {

  // Calcula os pontos
  jogadores.forEach(j => {
    j.pontos = j.gols + j.assistencias;
  });

  // Ordena pelo ranking
  jogadores.sort((a, b) =>
    b.pontos - a.pontos ||
    b.gols - a.gols ||
    b.assistencias - a.assistencias
  );

  const tabela = document.getElementById("ranking");
  tabela.innerHTML = "";

  jogadores.forEach((j, index) => {

    const tr = document.createElement("tr");

    // Destaques do pódio
    if (index === 0) tr.classList.add("primeiro");
    if (index === 1) tr.classList.add("segundo");
    if (index === 2) tr.classList.add("terceiro");

    tr.innerHTML = `
      <td class="posicao">${index + 1}</td>

      <td>
        <div class="jogador">
          <img src="${j.foto}" alt="${j.nome}">
          <span>${j.nome}</span>
        </div>
      </td>

      <td>${j.gols}</td>
      <td>${j.assistencias}</td>
      <td class="pontos">${j.pontos}</td>
    `;

    tabela.appendChild(tr);
  });
}

renderizarTabela();