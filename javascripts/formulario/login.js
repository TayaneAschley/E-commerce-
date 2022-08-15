
const formulario = document.querySelector("[data-form-login]")

formulario.addEventListener("submit", (event)=>{
  event.preventDefault()

  const email = event.target.querySelector("[data-email-login]").value;
  const senha = event.target.querySelector("[data-senha-login]").value;
   
  const usuario = JSON.parse(localStorage.getItem("usuario")) 
  
  if(email === usuario.email && senha === usuario.senha){
    alert("usuario cadastrado");
  }
})


 





