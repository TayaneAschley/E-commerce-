// busca API e retorna os dados dentro dela
const listaUsuarios = () => {
  return fetch(`http://localhost:3000/USUARIOS`).then((resposta) => {
    return resposta.json();
  });
};

// busca o formulario
const formulario = document.querySelector("[data-form]");

// pega valor dos inputs para a funcao criaUsuario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.querySelector("[data-email-cadastro]").value;
  const senha = event.target.querySelector("[data-senha-cadastro]").value;

  criaUsuario(email, senha);
 
});

// cria um usuario e o coloca dentro da api
const criaUsuario = (email, senha) => {
  return fetch(`http://localhost:3000/USUARIOS`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      senha: senha,
    }),
  }).then((resposta) => {
    return resposta.body;
  });

};
