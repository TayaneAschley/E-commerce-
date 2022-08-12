const formulario = document.querySelector("[data-form-login]");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const email = evento.target.querySelector("[data-email-login]").value;
  const senha = evento.target.querySelector("[data-senha-login]").value;

  const dadosUsuarios = `http://localhost:3000/USUARIOS/`;
  fetch(dadosUsuarios)
    .then((resposta) => {
      return resposta.json();
    })
    .then((data) => {
      let validacao = data.find(
        (e) => e.email == email && e.senha == senha
      );
      console.log(validacao);
      if (validacao) {
        alert("usuario encontrado");
        email.value = "";
        senha.value = "";
        email.focus();
      } else {
        alert("usuario não encontrado");
      }
    });
});
