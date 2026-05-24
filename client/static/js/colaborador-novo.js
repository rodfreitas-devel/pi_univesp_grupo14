document
  .getElementById("formColaborador")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;

    const colaborador = {
      nome: form.nome.value,
      cpf: form.cpf.value,
      dataNascimento: form.dataNascimento.value,
      sexo: form.sexo.value,
      idFilial: form.idFilial.value,
      idFuncao: form.idFuncao.value,
      salarioMensal: form.salarioMensal.value,
      salarioHora: form.salarioHora.value,
      dataAdmissao: form.dataAdmissao.value,
      dataDemissao: form.dataDemissao.value,
    };

    // Busca colaboradores existentes
    let colaboradores = JSON.parse(localStorage.getItem("colaboradores")) || [];

    // Adiciona novo colaborador
    colaboradores.push(colaborador);

    // Salva novamente
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores));

    alert("Colaborador salvo com sucesso!");

    // Limpa formulário
    form.reset();
  });
