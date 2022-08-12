import { produtosStarWars } from "./dadosProdutos.js";
import { produtosConsole } from "./dadosProdutos.js";
import { produtosDiversos } from "./dadosProdutos.js";

// exibe produtos starWars
function mostrarProdutos() {
  var secaoProdutos1 = document.querySelector(".produtos-starWars");
  var secaoProdutos2 = document.querySelector(".produtos-console");
  var secaoProdutos3 = document.querySelector(".produtos-diversos");
  produtosStarWars.map((el) => {
    secaoProdutos1.innerHTML += `
  
    <div key="${el.id}" class="produtos">
      <div class="card-img">
        <img src="../assets/img/img-starwars/${el.id}.png" alt="Imagem ${el.id}" />
      </div>
      <div class="informacoes-produto">
        <p class="texto-produto">${el.nome}</p>
        <p class="valor-produto">${el.valor}</p>
        <a href="#">Ver produto</a>
      </div>
    </div>
    `;
  });

// exibe produtos console
  produtosConsole.map((el) => {
    secaoProdutos2.innerHTML += `
    <div key="${el.id}" class="produtos">
      <div class="card-img">
      <img src="../assets/img/img-consoles/${el.id}.png" alt="Imagem ${el.id}" />
      </div>
      <div class="informacoes-produto">
        <p class="texto-produto" >${el.nome}</p>
        <p class="valor-produto">${el.valor}</p>
        <a href="#">Ver produto</a>
      </div>
    </div>
    `;
  });

  // exibe produtos Diversos
  produtosDiversos.map((el) => {
    secaoProdutos3.innerHTML += `
    <div key="${el.id}" class="produtos">
      <div class="card-img">
      <img src="../assets/img/img-diversos/${el.id}.png" alt="Imagem ${el.id}" />
      </div>
      <div class="informacoes-produto">
        <p class="texto-produto">${el.nome}</p>
        <p class="valor-produto">${el.valor}</p>
        <a href="#">Ver produto</a>
      </div>
    </div>
    `;
  });
}

mostrarProdutos();
