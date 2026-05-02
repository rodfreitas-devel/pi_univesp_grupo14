// Array de colaboradores (simulando dados do backend)
const collaborators = [
  {
    id: 1,
    nome: "João Silva",
    cpf: "123.456.789-00",
    nascimento: "1980-05-14",
    sexo: "Masculino",
    filial: "Filial A",
    funcao: "Analista",
    salarioMensal: 3000,
    salarioHora: 20,
    admissao: "2010-03-10",
    demissao: "",
  },
  {
    id: 2,
    nome: "Maria Souza",
    cpf: "987.654.321-00",
    nascimento: "1990-08-20",
    sexo: "Feminino",
    filial: "Filial B",
    funcao: "Gerente",
    salarioMensal: 5000,
    salarioHora: 30,
    admissao: "2015-11-15",
    demissao: "",
  },
  {
    id: 3,
    nome: "Pedro Oliveira",
    cpf: "111.222.333-44",
    nascimento: "1995-02-25",
    sexo: "Masculino",
    filial: "Filial A",
    funcao: "Coordenador",
    salarioMensal: 4000,
    salarioHora: 25,
    admissao: "2017-06-12",
    demissao: "",
  },
  {
    id: 4,
    nome: "Ana Costa",
    cpf: "222.333.444-55",
    nascimento: "1992-04-18",
    sexo: "Feminino",
    filial: "Filial C",
    funcao: "Assistente",
    salarioMensal: 2200,
    salarioHora: 18,
    admissao: "2018-08-22",
    demissao: "",
  },
  {
    id: 5,
    nome: "Carlos Pereira",
    cpf: "333.444.555-66",
    nascimento: "1985-11-30",
    sexo: "Masculino",
    filial: "Filial B",
    funcao: "Analista",
    salarioMensal: 3500,
    salarioHora: 22,
    admissao: "2012-01-25",
    demissao: "",
  },
  {
    id: 6,
    nome: "Fernanda Almeida",
    cpf: "444.555.666-77",
    nascimento: "1993-07-10",
    sexo: "Feminino",
    filial: "Filial A",
    funcao: "Desenvolvedora",
    salarioMensal: 5500,
    salarioHora: 40,
    admissao: "2016-03-05",
    demissao: "",
  },
  {
    id: 7,
    nome: "Lucas Martins",
    cpf: "555.666.777-88",
    nascimento: "1994-12-12",
    sexo: "Masculino",
    filial: "Filial C",
    funcao: "Coordenador",
    salarioMensal: 4500,
    salarioHora: 35,
    admissao: "2017-07-17",
    demissao: "",
  },
  {
    id: 8,
    nome: "Juliana Rocha",
    cpf: "666.777.888-99",
    nascimento: "1988-03-25",
    sexo: "Feminino",
    filial: "Filial A",
    funcao: "Gerente",
    salarioMensal: 6000,
    salarioHora: 50,
    admissao: "2014-06-11",
    demissao: "",
  },
  {
    id: 9,
    nome: "Roberto Santos",
    cpf: "777.888.999-00",
    nascimento: "1983-09-14",
    sexo: "Masculino",
    filial: "Filial B",
    funcao: "Assistente",
    salarioMensal: 2000,
    salarioHora: 15,
    admissao: "2012-10-18",
    demissao: "",
  },
  {
    id: 10,
    nome: "Larissa Lima",
    cpf: "888.999.000-11",
    nascimento: "1995-05-06",
    sexo: "Feminino",
    filial: "Filial C",
    funcao: "Analista",
    salarioMensal: 3000,
    salarioHora: 25,
    admissao: "2019-01-03",
    demissao: "",
  },
  {
    id: 11,
    nome: "Eduardo Costa",
    cpf: "999.000.111-22",
    nascimento: "1990-12-02",
    sexo: "Masculino",
    filial: "Filial A",
    funcao: "Desenvolvedor",
    salarioMensal: 4500,
    salarioHora: 30,
    admissao: "2014-11-23",
    demissao: "",
  },
  {
    id: 12,
    nome: "Amanda Silva",
    cpf: "000.111.222-33",
    nascimento: "1989-06-14",
    sexo: "Feminino",
    filial: "Filial B",
    funcao: "Gerente",
    salarioMensal: 7000,
    salarioHora: 45,
    admissao: "2013-05-10",
    demissao: "",
  },
  {
    id: 13,
    nome: "Tiago Oliveira",
    cpf: "111.222.333-77",
    nascimento: "1987-01-18",
    sexo: "Masculino",
    filial: "Filial C",
    funcao: "Coordenador",
    salarioMensal: 5000,
    salarioHora: 40,
    admissao: "2012-07-20",
    demissao: "",
  },
  {
    id: 14,
    nome: "Carla Souza",
    cpf: "222.333.444-88",
    nascimento: "1994-11-02",
    sexo: "Feminino",
    filial: "Filial A",
    funcao: "Assistente",
    salarioMensal: 2200,
    salarioHora: 18,
    admissao: "2019-04-17",
    demissao: "",
  },
  {
    id: 15,
    nome: "Gustavo Almeida",
    cpf: "333.444.555-99",
    nascimento: "1992-07-27",
    sexo: "Masculino",
    filial: "Filial B",
    funcao: "Analista",
    salarioMensal: 3500,
    salarioHora: 28,
    admissao: "2015-09-30",
    demissao: "",
  },
  {
    id: 16,
    nome: "Renata Costa",
    cpf: "444.555.666-00",
    nascimento: "1991-01-11",
    sexo: "Feminino",
    filial: "Filial C",
    funcao: "Desenvolvedora",
    salarioMensal: 4800,
    salarioHora: 32,
    admissao: "2017-10-10",
    demissao: "",
  },
  {
    id: 17,
    nome: "Fábio Silva",
    cpf: "555.666.777-11",
    nascimento: "1984-04-30",
    sexo: "Masculino",
    filial: "Filial A",
    funcao: "Gerente",
    salarioMensal: 6500,
    salarioHora: 45,
    admissao: "2011-02-19",
    demissao: "",
  },
  {
    id: 18,
    nome: "Isabela Rocha",
    cpf: "666.777.888-22",
    nascimento: "1996-10-12",
    sexo: "Feminino",
    filial: "Filial B",
    funcao: "Coordenadora",
    salarioMensal: 4500,
    salarioHora: 35,
    admissao: "2018-08-25",
    demissao: "",
  },
  {
    id: 19,
    nome: "Marcos Lima",
    cpf: "777.888.999-33",
    nascimento: "1992-03-21",
    sexo: "Masculino",
    filial: "Filial C",
    funcao: "Analista",
    salarioMensal: 4000,
    salarioHora: 30,
    admissao: "2015-06-12",
    demissao: "",
  },
  {
    id: 20,
    nome: "Carolina Souza",
    cpf: "888.999.000-44",
    nascimento: "1994-08-15",
    sexo: "Feminino",
    filial: "Filial A",
    funcao: "Assistente",
    salarioMensal: 2300,
    salarioHora: 18,
    admissao: "2020-05-05",
    demissao: "",
  },
  {
    id: 21,
    nome: "Bruna Silva",
    cpf: "999.000.111-66",
    nascimento: "1990-11-09",
    sexo: "Feminino",
    filial: "Filial B",
    funcao: "Gerente",
    salarioMensal: 7000,
    salarioHora: 50,
    admissao: "2012-04-13",
    demissao: "",
  },
  {
    id: 22,
    nome: "Thiago Pereira",
    cpf: "000.111.222-44",
    nascimento: "1988-02-10",
    sexo: "Masculino",
    filial: "Filial C",
    funcao: "Desenvolvedor",
    salarioMensal: 4700,
    salarioHora: 35,
    admissao: "2014-03-05",
    demissao: "",
  },
  {
    id: 23,
    nome: "Letícia Santos",
    cpf: "111.222.333-99",
    nascimento: "1993-05-18",
    sexo: "Feminino",
    filial: "Filial A",
    funcao: "Assistente",
    salarioMensal: 2000,
    salarioHora: 15,
    admissao: "2020-01-22",
    demissao: "",
  },
  {
    id: 24,
    nome: "Rodrigo Almeida",
    cpf: "222.333.444-00",
    nascimento: "1986-08-13",
    sexo: "Masculino",
    filial: "Filial B",
    funcao: "Coordenador",
    salarioMensal: 5000,
    salarioHora: 40,
    admissao: "2013-06-30",
    demissao: "",
  },
  {
    id: 25,
    nome: "Luciana Oliveira",
    cpf: "333.444.555-00",
    nascimento: "1995-01-10",
    sexo: "Feminino",
    filial: "Filial C",
    funcao: "Desenvolvedora",
    salarioMensal: 6000,
    salarioHora: 42,
    admissao: "2017-09-05",
    demissao: "",
  },
  {
    id: 26,
    nome: "Guilherme Costa",
    cpf: "444.555.666-33",
    nascimento: "1991-06-17",
    sexo: "Masculino",
    filial: "Filial A",
    funcao: "Analista",
    salarioMensal: 3500,
    salarioHora: 28,
    admissao: "2014-02-14",
    demissao: "",
  },
  {
    id: 27,
    nome: "Mariana Rocha",
    cpf: "555.666.777-33",
    nascimento: "1992-07-05",
    sexo: "Feminino",
    filial: "Filial B",
    funcao: "Gerente",
    salarioMensal: 6500,
    salarioHora: 50,
    admissao: "2016-04-15",
    demissao: "",
  },
  {
    id: 28,
    nome: "Paulo Silva",
    cpf: "666.777.888-44",
    nascimento: "1989-12-30",
    sexo: "Masculino",
    filial: "Filial C",
    funcao: "Coordenador",
    salarioMensal: 5000,
    salarioHora: 35,
    admissao: "2013-02-22",
    demissao: "",
  },
  {
    id: 29,
    nome: "Gabriela Pereira",
    cpf: "777.888.999-55",
    nascimento: "1994-04-02",
    sexo: "Feminino",
    filial: "Filial A",
    funcao: "Desenvolvedora",
    salarioMensal: 5500,
    salarioHora: 38,
    admissao: "2018-10-08",
    demissao: "",
  },
  {
    id: 30,
    nome: "André Costa",
    cpf: "888.999.000-66",
    nascimento: "1987-11-25",
    sexo: "Masculino",
    filial: "Filial B",
    funcao: "Gerente",
    salarioMensal: 7000,
    salarioHora: 55,
    admissao: "2014-09-12",
    demissao: "",
  },
];

// Função para gerar as linhas da tabela
function loadCollaborators() {
  const tableBody = document.getElementById("collaborators-list");
  tableBody.innerHTML = ""; // Limpar conteúdo atual da tabela

  collaborators.forEach((collaborator) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = collaborator.nome;

    const actionsCell = document.createElement("td");
    actionsCell.classList.add("text-end");

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-sm", "btn-primary", "me-2");
    editButton.textContent = "Editar";
    editButton.onclick = () => openEditModal(collaborator.id);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-sm", "btn-danger");
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = () => deleteCollaborator(collaborator.id);

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
}

// Função para abrir o modal de edição e preencher o formulário
function openEditModal(id) {
  const collaborator = collaborators.find((collab) => collab.id === id);

  // Preencher os campos do formulário
  document.getElementById("nome").value = collaborator.nome;
  document.getElementById("cpf").value = collaborator.cpf;
  document.getElementById("nascimento").value = collaborator.nascimento;
  document.getElementById("sexo").value = collaborator.sexo;
  document.getElementById("filial").value = collaborator.filial;
  document.getElementById("funcao").value = collaborator.funcao;
  document.getElementById("salarioMensal").value = collaborator.salarioMensal;
  document.getElementById("salarioHora").value = collaborator.salarioHora;
  document.getElementById("admissao").value = collaborator.admissao;
  document.getElementById("demissao").value = collaborator.demissao;

  // Exibir o modal
  const myModal = new bootstrap.Modal(document.getElementById("editModal"));
  myModal.show();
}

// Função de exclusão
function deleteCollaborator(id) {
  if (confirm("Tem certeza que deseja excluir?")) {
    const index = collaborators.findIndex((collab) => collab.id === id);
    if (index !== -1) {
      collaborators.splice(index, 1); // Remove o colaborador do array
      loadCollaborators(); // Recarrega a tabela
    }
  }
}

// Função para filtrar os colaboradores conforme a pesquisa
function filterCollaborators() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filteredCollaborators = collaborators.filter((collaborator) =>
    collaborator.nome.toLowerCase().includes(query),
  );
  displayFilteredCollaborators(filteredCollaborators);
}

// Função para exibir os colaboradores filtrados
function displayFilteredCollaborators(filteredCollaborators) {
  const tableBody = document.getElementById("collaborators-list");
  tableBody.innerHTML = ""; // Limpa a tabela

  filteredCollaborators.forEach((collaborator) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = collaborator.nome;

    const actionsCell = document.createElement("td");
    actionsCell.classList.add("text-end");

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-sm", "btn-primary", "me-2");
    editButton.textContent = "Editar";
    editButton.onclick = () => openEditModal(collaborator.id);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-sm", "btn-danger");
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = () => deleteCollaborator(collaborator.id);

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
}

// Carregar os colaboradores na página
loadCollaborators();
