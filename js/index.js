import { dados } from "./data.js";
function renderizarProdutos() {
  const listaClassicos = document.querySelectorAll(".products__list")[0];
  const listaGelados = document.querySelectorAll(".products__list")[1];

  dados.produtos.forEach(produto => {
    const item = document.createElement("div");
    item.classList.add("products__list--item");

    item.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3 class="products__list--price">
        R$ ${(produto.preco.de / 100).toFixed(2)} 
        <span>R$ ${(produto.preco.por / 100).toFixed(2)}</span>
      </h3>
      <h4 class="products__list--name">${produto.nome}</h4>
      <div class="product__tag">
        ${produto.vegano ? `<img src="./image/Plant.png" alt="vegano"><span>Vegano</span>` : ""}
      </div>
      <form>
        <div class="product__buy">
          <section class="product__quantity">
            <button type="button" class="product__quantity--minus">-</button>
            <input type="text" class="product__quantity--input" value="1">
            <button type="button" class="product__quantity--plus">+</button>
          </section>
          <button type="button" class="product__button" data-id="${produto.id}">
            Comprar
          </button>
        </div>
      </form>
    `;

    if (produto.categoria === "classicos") {
      listaClassicos.appendChild(item);
    } else if (produto.categoria === "gelados") {
      listaGelados.appendChild(item);
    }
  });
}

renderizarProdutos();

function renderizarCarrinho() {
  const cartProducts = document.querySelector(".cart__products");
  const cartQuantity = document.querySelector(".cart__quantity-items");
  const cartSubtotal = document.querySelector(".cart__footer--subtotal .cart__footer--price");
  const cartTotal = document.querySelector(".cart__footer--total .cart__footer--price");
  
  cartProducts.innerHTML = ""; 
  let totalItens = 0;
  let subtotal = 0;

  dados.carrinho.forEach(item => {
    totalItens += Number(item.quantidade);
    subtotal += item.preco * Number(item.quantidade);

    const produtoItem = document.createElement("div");
    produtoItem.classList.add("cart__product-item");
    produtoItem.dataset.id = item.id;

    produtoItem.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <div class="cart__product-info">
        <h4>${item.nome}</h4>
        <p>
          R$ ${(item.preco / 100).toFixed(2)} x ${item.quantidade} = 
          R$ ${((item.preco * item.quantidade) / 100).toFixed(2)}
        </p>
        <div class="cart__product-actions">
          <button class="cart__product-minus" data-id="${item.id}">-</button>
          <span>${item.quantidade}</span>
          <button class="cart__product-plus" data-id="${item.id}">+</button>
          <button class="cart__product-remove" data-id="${item.id}">Remover</button>
        </div>
      </div>
    `;

    const btnMais = produtoItem.querySelector(".cart__product-plus");
    const btnMenos = produtoItem.querySelector(".cart__product-minus");
    const btnRemover = produtoItem.querySelector(".cart__product-remove");

    btnMais.addEventListener("click", () => {
      item.quantidade++;
      renderizarCarrinho();
    });

    btnMenos.addEventListener("click", () => {
      item.quantidade--;
      if (item.quantidade <= 0) {
        dados.carrinho = dados.carrinho.filter(i => i.id !== item.id);
      }
      renderizarCarrinho();
    });

    btnRemover.addEventListener("click", () => {
      dados.carrinho = dados.carrinho.filter(i => i.id !== item.id);
      renderizarCarrinho();
    });

    cartProducts.appendChild(produtoItem);
  });

  cartQuantity.textContent = `${totalItens} item${totalItens > 1 ? "s" : ""}`;
  cartSubtotal.textContent = `R$ ${(subtotal / 100).toFixed(2)}`;
  cartTotal.textContent = `R$ ${(subtotal / 100).toFixed(2)}`;
}

renderizarCarrinho();
