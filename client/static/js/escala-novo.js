let jornadas = [];
let turnos = [];

// -----------------------------
// ADICIONAR JORNADA
// -----------------------------
function adicionarJornada() {
  const jornada = document.getElementById("jornada").value;

  if (!jornada) return alert("Selecione uma jornada!");

  jornadas = [jornada]; // apenas uma jornada (substitui a anterior)

  document.getElementById("jornadaSelecionada").innerHTML =
    `<span class="badge bg-primary">${jornada}</span>`;
}

// -----------------------------
// ADICIONAR TURNO
// -----------------------------
function adicionarTurno() {
  const turno = document.getElementById("turno").value;

  if (!turno) return alert("Selecione um turno!");

  if (turnos.includes(turno)) {
    return alert("Este turno já foi adicionado!");
  }

  turnos.push(turno);

  renderTurnos();
}

// -----------------------------
// RENDER TURNOS
// -----------------------------
function renderTurnos() {
  const lista = document.getElementById("listaTurnos");
  lista.innerHTML = "";

  turnos.forEach((t, index) => {
    lista.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${t}
        <button class="btn btn-sm btn-danger" onclick="removerTurno(${index})">
          Remover
        </button>
      </li>
    `;
  });
}

// -----------------------------
// REMOVER TURNO
// -----------------------------
function removerTurno(index) {
  turnos.splice(index, 1);
  renderTurnos();
}

// -----------------------------
// SALVAR ESCALA
// -----------------------------
document.getElementById("formEscala").addEventListener("submit", function (e) {
  e.preventDefault();

  const colaborador = document.getElementById("colaborador").value;

  if (!colaborador) {
    return alert("Selecione um colaborador!");
  }

  if (jornadas.length === 0) {
    return alert("Adicione uma jornada!");
  }

  if (turnos.length === 0) {
    return alert("Adicione pelo menos um turno!");
  }

  const escala = {
    colaborador: colaborador,
    jornada: jornadas,
    turnos: turnos,
  };

  let escalas = JSON.parse(localStorage.getItem("escalas")) || [];

  escalas.push(escala);

  localStorage.setItem("escalas", JSON.stringify(escalas));

  alert("Escala salva com sucesso!");

  // reset
  document.getElementById("formEscala").reset();
  document.getElementById("jornadaSelecionada").innerHTML = "";
  document.getElementById("listaTurnos").innerHTML = "";

  jornadas = [];
  turnos = [];
});
