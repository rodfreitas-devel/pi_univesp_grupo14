let jornadaAdicionada = false;

function adicionarJornada() {
  const jornada = document.getElementById("jornada").value;
  const container = document.getElementById("jornadaSelecionada");

  if (!jornada) {
    alert("Selecione uma jornada.");
    return;
  }

  if (jornadaAdicionada) {
    alert("Só é permitido adicionar uma jornada.");
    return;
  }

  container.innerHTML = `
          <div class="alert alert-info d-flex justify-content-between align-items-center">
            Jornada: ${jornada}
            <button class="btn btn-sm btn-danger" onclick="removerJornada()">Remover</button>
          </div>
        `;

  jornadaAdicionada = true;
}

function removerJornada() {
  document.getElementById("jornadaSelecionada").innerHTML = "";
  jornadaAdicionada = false;
}

function adicionarTurno() {
  const turno = document.getElementById("turno").value;
  const lista = document.getElementById("listaTurnos");

  if (!turno) {
    alert("Selecione um turno.");
    return;
  }

  const item = document.createElement("li");
  item.className =
    "list-group-item d-flex justify-content-between align-items-center";
  item.innerHTML = `
          ${turno}
          <button class="btn btn-sm btn-danger" onclick="this.parentElement.remove()">Remover</button>
        `;

  lista.appendChild(item);
}

document.getElementById("formEscala").addEventListener("submit", function (e) {
  e.preventDefault();

  const colaborador = document.getElementById("colaborador").value;
  const turnos = document.querySelectorAll("#listaTurnos li");

  if (!colaborador) {
    alert("Selecione um colaborador.");
    return;
  }

  if (!jornadaAdicionada) {
    alert("Adicione uma jornada.");
    return;
  }

  if (turnos.length === 0) {
    alert("Adicione pelo menos um turno.");
    return;
  }

  alert("Escala salva com sucesso!");
});
