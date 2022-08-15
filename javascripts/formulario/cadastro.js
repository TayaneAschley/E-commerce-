const formulario = document.querySelector("[data-form-cadastro]");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.querySelector("[data-email-cadastro]").value;
  const senha = event.target.querySelector("[data-senha-cadastro]").value;

  function pegaDados(email, senha) {
    const dados = {
      email: email,
      senha: senha,
    };

    localStorage.setItem("usuario", JSON.stringify(dados));

    console.log(localStorage.getItem("usuario"));
  }

  pegaDados(email, senha);
});


