let escalas = [];
let editIndex = null;
let editTurnos = [];

// -----------------------------
// CARREGAR
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  carregarEscalas();
});

// -----------------------------
// BUSCAR LOCALSTORAGE
// -----------------------------
function carregarEscalas() {
  escalas = JSON.parse(localStorage.getItem("escalas")) || [];
  render();
}

// -----------------------------
// RENDER LISTA
// -----------------------------
function render() {
  const tbody = document.getElementById("escalas-list");
  tbody.innerHTML = "";

  if (escalas.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td class="text-center text-muted">
          Nenhuma escala cadastrada
        </td>
      </tr>
    `;
    return;
  }

  escalas.forEach((e, index) => {
    tbody.innerHTML += `
      <tr>
        <td>
          <strong>${e.colaborador}</strong><br>
          <small>
            Jornada: ${e.jornada} <br>
            Turnos: ${e.turnos.join(", ")}
          </small>
        </td>

        <td class="text-end">
          <button class="btn btn-primary btn-sm" onclick="editar(${index})">
            Editar
          </button>

          <button class="btn btn-danger btn-sm" onclick="excluir(${index})">
            Excluir
          </button>
        </td>
      </tr>
    `;
  });
}

// -----------------------------
// EXCLUIR
// -----------------------------
function excluir(index) {
  if (!confirm("Deseja realmente excluir esta escala?")) return;

  escalas.splice(index, 1);
  localStorage.setItem("escalas", JSON.stringify(escalas));
  carregarEscalas();
}

// -----------------------------
// EDITAR
// -----------------------------
function editar(index) {
  editIndex = index;

  const e = escalas[index];

  document.getElementById("editColaborador").value = e.colaborador;
  document.getElementById("editJornada").value = e.jornada;

  editTurnos = [...e.turnos];
  renderEditTurnos();

  const modal = new bootstrap.Modal(document.getElementById("editEscalaModal"));
  modal.show();
}

// -----------------------------
// ADICIONAR TURNO NO EDIT
// -----------------------------
function addTurnoEdit() {
  const turno = document.getElementById("editTurno").value;

  if (!turno) return;

  if (editTurnos.includes(turno)) {
    return alert("Turno já adicionado!");
  }

  editTurnos.push(turno);
  renderEditTurnos();
}

// -----------------------------
// RENDER TURNOS EDIT
// -----------------------------
function renderEditTurnos() {
  const ul = document.getElementById("editListaTurnos");
  ul.innerHTML = "";

  editTurnos.forEach((t, index) => {
    ul.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${t}
        <button class="btn btn-sm btn-danger" onclick="removeTurnoEdit(${index})">
          X
        </button>
      </li>
    `;
  });
}

// -----------------------------
// REMOVER TURNO EDIT
// -----------------------------
function removeTurnoEdit(index) {
  editTurnos.splice(index, 1);
  renderEditTurnos();
}

// -----------------------------
// SALVAR EDIT
// -----------------------------
document
  .getElementById("editEscalaForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    if (editIndex === null) return;

    escalas[editIndex] = {
      ...escalas[editIndex],
      jornada: document.getElementById("editJornada").value,
      turnos: editTurnos,
    };

    localStorage.setItem("escalas", JSON.stringify(escalas));

    bootstrap.Modal.getInstance(
      document.getElementById("editEscalaModal"),
    ).hide();

    carregarEscalas();
  });

// -----------------------------
// FILTRO (BUSCA)
// -----------------------------
function filterEscalas() {
  const value = document.getElementById("searchInput").value.toLowerCase();

  const rows = document.querySelectorAll("#escalas-list tr");

  rows.forEach((row) => {
    const text = row.innerText.toLowerCase();

    row.style.display = text.includes(value) ? "" : "none";
  });
}
