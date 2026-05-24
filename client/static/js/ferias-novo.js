document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formFerias");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const colaborador = document.querySelector("select").value;
    const dataInicio = document.querySelector('input[type="date"]').value;
    const dias = document.querySelectorAll("select")[1].value;

    // -----------------------------
    // VALIDAÇÃO
    // -----------------------------
    if (!colaborador) {
      return alert("Selecione um colaborador!");
    }

    if (!dataInicio) {
      return alert("Informe a data de início!");
    }

    if (!dias) {
      return alert("Selecione a quantidade de dias!");
    }

    // -----------------------------
    // OBJETO FÉRIAS
    // -----------------------------
    const ferias = {
      colaborador: colaborador,
      dataInicio: dataInicio,
      dias: dias,
    };

    // -----------------------------
    // SALVAR NO LOCALSTORAGE
    // -----------------------------
    let listaFerias = JSON.parse(localStorage.getItem("ferias")) || [];

    listaFerias.push(ferias);

    localStorage.setItem("ferias", JSON.stringify(listaFerias));

    alert("Férias cadastradas com sucesso!");

    // -----------------------------
    // RESET FORM
    // -----------------------------
    form.reset();
  });
});
