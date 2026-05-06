let escalas = [
  {
    id: 1,
    colaborador: "João Silva",
    jornada: "8h",
    turnos: ["Manhã", "Tarde"],
  },
  {
    id: 2,
    colaborador: "Maria Souza",
    jornada: "6h",
    turnos: ["Noite"],
  },
];

let escalaEditando = null;
let turnosEdit = [];

// LISTAR
function loadEscalas() {
  const table = document.getElementById("escalas-list");
  table.innerHTML = "";

  escalas.forEach((e) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <strong>${e.colaborador}</strong><br>
        Jornada: ${e.jornada}<br>
        Turnos: ${e.turnos.join(", ")}
      </td>
      <td class="text-end">
        <button class="btn btn-sm btn-primary me-2" onclick="editEscala(${e.id})">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="deleteEscala(${e.id})">Excluir</button>
      </td>
    `;

    table.appendChild(row);
  });
}

// BUSCA
function filterEscalas() {
  const q = document.getElementById("searchInput").value.toLowerCase();

  const filtradas = escalas.filter((e) =>
    e.colaborador.toLowerCase().includes(q),
  );

  const table = document.getElementById("escalas-list");
  table.innerHTML = "";

  filtradas.forEach((e) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <strong>${e.colaborador}</strong><br>
        Jornada: ${e.jornada}<br>
        Turnos: ${e.turnos.join(", ")}
      </td>
      <td class="text-end">
        <button class="btn btn-sm btn-primary me-2" onclick="editEscala(${e.id})">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="deleteEscala(${e.id})">Excluir</button>
      </td>
    `;

    table.appendChild(row);
  });
}

// EXCLUIR
function deleteEscala(id) {
  if (confirm("Deseja excluir?")) {
    escalas = escalas.filter((e) => e.id !== id);
    loadEscalas();
  }
}

// EDITAR
function editEscala(id) {
  escalaEditando = escalas.find((e) => e.id === id);

  document.getElementById("editColaborador").value = escalaEditando.colaborador;
  document.getElementById("editJornada").value = escalaEditando.jornada;

  turnosEdit = [...escalaEditando.turnos];

  renderTurnosEdit();

  new bootstrap.Modal(document.getElementById("editEscalaModal")).show();
}

// ADICIONAR TURNO
function addTurnoEdit() {
  const turno = document.getElementById("editTurno").value;

  if (turno && !turnosEdit.includes(turno)) {
    turnosEdit.push(turno);
    renderTurnosEdit();
  }
}

// RENDER TURNOS
function renderTurnosEdit() {
  const lista = document.getElementById("editListaTurnos");
  lista.innerHTML = "";

  turnosEdit.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";

    li.innerHTML = `
      ${t}
      <button class="btn btn-sm btn-danger">X</button>
    `;

    li.querySelector("button").onclick = () => {
      turnosEdit.splice(i, 1);
      renderTurnosEdit();
    };

    lista.appendChild(li);
  });
}

// SALVAR
document
  .getElementById("editEscalaForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    escalaEditando.jornada = document.getElementById("editJornada").value;
    escalaEditando.turnos = [...turnosEdit];

    bootstrap.Modal.getInstance(
      document.getElementById("editEscalaModal"),
    ).hide();

    loadEscalas();
  });

// INIT
loadEscalas();
