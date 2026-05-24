let colaboradores = [];
let editIndex = null;

// -----------------------------
// INIT
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  carregar();
});

// -----------------------------
// CARREGAR LISTA
// -----------------------------
function carregar() {
  colaboradores = JSON.parse(localStorage.getItem("colaboradores")) || [];
  render();
}

// -----------------------------
// RENDER TABELA
// -----------------------------
function render() {
  const tbody = document.getElementById("collaborators-list");
  tbody.innerHTML = "";

  if (colaboradores.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted">
          Nenhum colaborador cadastrado
        </td>
      </tr>
    `;
    return;
  }

  colaboradores.forEach((c, index) => {
    tbody.innerHTML += `
    <tr>
      <td>${c.nome}</td>

      <td>
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

// -----------------------------
// EXCLUIR
// -----------------------------
function deletar(index) {
  if (!confirm("Deseja realmente excluir este colaborador?")) return;

  colaboradores.splice(index, 1);

  localStorage.setItem("colaboradores", JSON.stringify(colaboradores));

  carregar();
}

// -----------------------------
// ABRIR MODAL PARA EDITAR
// -----------------------------
function editar(index) {
  editIndex = index;

  const c = colaboradores[index];

  document.getElementById("nome").value = c.nome || "";
  document.getElementById("cpf").value = c.cpf || "";
  document.getElementById("nascimento").value = c.dataNascimento || "";
  document.getElementById("sexo").value = c.sexo || "";
  document.getElementById("filial").value = c.idFilial || "";
  document.getElementById("funcao").value = c.idFuncao || "";
  document.getElementById("salarioMensal").value = c.salarioMensal || "";
  document.getElementById("salarioHora").value = c.salarioHora || "";
  document.getElementById("admissao").value = c.dataAdmissao || "";
  document.getElementById("demissao").value = c.dataDemissao || "";

  const modal = new bootstrap.Modal(document.getElementById("editModal"));
  modal.show();
}

// -----------------------------
// SALVAR EDIÇÃO
// -----------------------------
document.getElementById("editForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (editIndex === null) return;

  colaboradores[editIndex] = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    dataNascimento: document.getElementById("nascimento").value,
    sexo: document.getElementById("sexo").value,
    idFilial: document.getElementById("filial").value,
    idFuncao: document.getElementById("funcao").value,
    salarioMensal: document.getElementById("salarioMensal").value,
    salarioHora: document.getElementById("salarioHora").value,
    dataAdmissao: document.getElementById("admissao").value,
    dataDemissao: document.getElementById("demissao").value,
  };

  localStorage.setItem("colaboradores", JSON.stringify(colaboradores));

  bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();

  carregar();
});
