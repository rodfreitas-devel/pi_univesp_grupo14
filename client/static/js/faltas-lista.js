let faltas = JSON.parse(localStorage.getItem("faltas")) || [];
let editIndex = null;

const lista = document.getElementById("listaFaltas");

function render() {
  lista.innerHTML = "";

  faltas.forEach((f, index) => {
    lista.innerHTML += `
      <tr>
        <td><strong>${f.colaborador}</strong></td>

        <td class="text-end">
          <button class="btn btn-primary btn-sm" onclick="editar(${index})">
            Editar
          </button>

          <button class="btn btn-danger btn-sm" onclick="deletar(${index})">
            Excluir
          </button>
        </td>
      </tr>
    `;
  });
}

function editar(index) {
  editIndex = index;

  document.getElementById("editColaborador").value = faltas[index].colaborador;
  document.getElementById("editDataFalta").value = faltas[index].dataFalta;
  document.getElementById("editMotivo").value = faltas[index].motivo;

  new bootstrap.Modal(document.getElementById("modalEditar")).show();
}

document
  .getElementById("formEditarFalta")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    faltas[editIndex].dataFalta =
      document.getElementById("editDataFalta").value;
    faltas[editIndex].motivo = document.getElementById("editMotivo").value;

    localStorage.setItem("faltas", JSON.stringify(faltas));

    render();

    bootstrap.Modal.getInstance(document.getElementById("modalEditar")).hide();
  });

function deletar(index) {
  if (confirm("Deseja excluir esta falta?")) {
    faltas.splice(index, 1);
    localStorage.setItem("faltas", JSON.stringify(faltas));
    render();
  }
}

function filtrarFaltas() {
  const termo = document.getElementById("searchInput").value.toLowerCase();

  const filtrado = faltas.filter((f) =>
    f.colaborador.toLowerCase().includes(termo),
  );

  lista.innerHTML = "";

  filtrado.forEach((f, index) => {
    lista.innerHTML += `
      <tr>
        <td><strong>${f.colaborador}</strong></td>

        <td class="text-end">
          <button class="btn btn-primary btn-sm" onclick="editar(${index})">
            Editar
          </button>

          <button class="btn btn-danger btn-sm" onclick="deletar(${index})">
            Excluir
          </button>
        </td>
      </tr>
    `;
  });
}

render();
