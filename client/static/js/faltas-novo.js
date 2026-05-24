const form = document.getElementById("formFaltas");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const colaborador = document.getElementById("colaborador").value;
  const dataFalta = document.getElementById("dataFalta").value;
  const motivo = document.getElementById("motivo").value;

  if (!colaborador || !dataFalta || !motivo) {
    alert("Preencha todos os campos!");
    return;
  }

  // Busca lista existente no localStorage
  let faltas = JSON.parse(localStorage.getItem("faltas")) || [];

  // Cria nova falta
  const novaFalta = {
    id: Date.now(),
    colaborador,
    dataFalta,
    motivo,
  };

  // Adiciona na lista
  faltas.push(novaFalta);

  // Salva no localStorage
  localStorage.setItem("faltas", JSON.stringify(faltas));

  alert("Falta registrada com sucesso!");

  // Limpa o formulário
  form.reset();
});
