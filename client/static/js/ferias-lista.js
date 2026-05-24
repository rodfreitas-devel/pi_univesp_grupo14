let ferias = [];
let editIndex = null;

document.addEventListener("DOMContentLoaded", () => {
  carregar();
});

// -----------------------------
// CARREGAR
// -----------------------------
function carregar() {
  ferias = JSON.parse(localStorage.getItem("ferias")) || [];
  render();
}

// -----------------------------
// RENDER
// -----------------------------
function render() {
  const tbody = document.getElementById("ferias-list");
  tbody.innerHTML = "";

  if (ferias.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td class="text-center text-muted">
          Nenhum registro de férias encontrado
        </td>
      </tr>
    `;
    return;
  }

  ferias.forEach((f, index) => {
    tbody.innerHTML += `
      <tr>
        <td>
          <strong>${f.colaborador}</strong><br>
          <small>
            Início: ${f.dataInicio} <br>
            Dias: ${f.dias}
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
  if (!confirm("Deseja realmente excluir este registro?")) return;

  ferias.splice(index, 1);
  localStorage.setItem("ferias", JSON.stringify(ferias));
  carregar();
}

// -----------------------------
// EDITAR
// -----------------------------
function editar(index) {
  editIndex = index;

  const f = ferias[index];

  document.getElementById("editColaborador").value = f.colaborador;
  document.getElementById("editDataInicio").value = f.dataInicio;
  document.getElementById("editDias").value = f.dias;

  const modal = new bootstrap.Modal(document.getElementById("editFeriasModal"));

  modal.show();
}

// -----------------------------
// SALVAR EDIÇÃO
// -----------------------------
document
  .getElementById("editFeriasForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    if (editIndex === null) return;

    ferias[editIndex] = {
      colaborador: document.getElementById("editColaborador").value,
      dataInicio: document.getElementById("editDataInicio").value,
      dias: document.getElementById("editDias").value,
    };

    localStorage.setItem("ferias", JSON.stringify(ferias));

    bootstrap.Modal.getInstance(
      document.getElementById("editFeriasModal"),
    ).hide();

    carregar();
  });

// -----------------------------
// BUSCA
// -----------------------------
function filterFerias() {
  const value = document.getElementById("searchInput").value.toLowerCase();

  const rows = document.querySelectorAll("#ferias-list tr");

  rows.forEach((row) => {
    row.style.display = row.innerText.toLowerCase().includes(value)
      ? ""
      : "none";
  });
}
