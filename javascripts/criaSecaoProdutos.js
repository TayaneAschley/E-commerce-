import { produtosStarWars } from "../data/dados-dos-produtos.js";
import { produtosConsole } from "../data/dados-dos-produtos.js";
import { produtosDiversos } from "../data/dados-dos-produtos.js";

// exibe produtos starWars
function mostrarProdutosSecao1() {
  var secaoProdutos1 = document.querySelector(".produtos-starWars");
  produtosStarWars.map((el) => {
    secaoProdutos1.innerHTML += `
  
    <div key="${el.id}" class="produtos">
      <div class="card-img">
        <img src="${el.img}" alt="Imagem ${el.id}" />
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

// exibe produtos console
function mostrarProdutosSecao2() {
  var secaoProdutos2 = document.querySelector(".produtos-console");
  produtosConsole.map((el) => {
    secaoProdutos2.innerHTML += `
    <div key="${el.id}" class="produtos">
      <div class="card-img">
      <img src="${el.img}" alt="Imagem ${el.id}" />
      </div>
      <div class="informacoes-produto">
        <p class="texto-produto" >${el.nome}</p>
        <p class="valor-produto">${el.valor}</p>
        <a href="#">Ver produto</a>
      </div>
    </div>
    `;
  });
}

// exibe produtos diversos
function mostrarProdutosSecao3() {
  var secaoProdutos3 = document.querySelector(".produtos-diversos");
  produtosDiversos.map((el) => {
    secaoProdutos3.innerHTML += `
    <div key="${el.id}" class="produtos">
      <div class="card-img">
      <img src="${el.img}" alt="Imagem ${el.id}" />
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

mostrarProdutosSecao1();
mostrarProdutosSecao2();
mostrarProdutosSecao3();
