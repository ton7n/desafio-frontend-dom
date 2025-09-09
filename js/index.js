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
        R$ ${(produto.preco.por / 100).toFixed(2)}
        <span>R$ ${(produto.preco.de / 100).toFixed(2)}</span></h3>
      <h4 class="products__list--name">${produto.nome}</h4>
      <div class="product__tag">
        ${produto.vegano ? `<img src="./image/Plant.png" alt="vegano"><span>Vegano</span>` : `<img src="./image/Cow.png" alt="contém leite"><span>Contém leite</span>`}
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
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("product__button")) {
    const idProduto = e.target.getAttribute("data-id");
    const produto = dados.produtos.find(p => p.id === idProduto);
    if (!produto) return;

    const existente = dados.carrinho.find(item => item.idProduto === idProduto);

    if (existente) {
      existente.quantidade++;
    } else {
      dados.carrinho.push({
        id: crypto.randomUUID(),  
        idProduto: produto.id,
        nome: produto.nome,
        imagem: produto.imagem,
        preco: produto.preco.por,  
        vegano: produto.vegano,
        quantidade: 1
      });
    }

    renderizarCarrinho();
    document.querySelector(".cart").classList.add("cart--active");
  }
});


function renderizarCarrinho() {
  const cartProducts = document.querySelector(".cart__products");
  const cartQuantity = document.querySelector(".cart__quantity-items");
  const cartSubtotal = document.querySelector(".cart__footer--subtotal .cart__footer--price");
  const cartTotal = document.querySelector(".cart__footer--total .cart__footer--price");
  const badgeQuantity = document.querySelector(".badge__quantity");

  cartProducts.innerHTML = ""; 
  let totalItens = 0;
  let subtotal = 0;

  dados.carrinho.forEach(item => {
    totalItens += Number(item.quantidade);
    subtotal += item.preco * Number(item.quantidade);

    const produtoItem = document.createElement("div");
    produtoItem.classList.add("cart__product");
    produtoItem.dataset.id = item.id;

    produtoItem.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}" class="cart__product--image">
      <div class="cart__product--info">
        <div class="cart__product--row">
          <div class="cart__product--column">
            <h2 class="cart__product--name">${item.nome}</h2>
          </div>
          <button class="cart__product--delete">×</button>
        </div>
        <div class="cart__product--row">
          <h3 class="cart__product--price">R$ ${(item.preco / 100).toFixed(2)}</h3>
          <section class="product__quantity">
            <button type="button" class="cart-minus">-</button>
            <span class="cart__product--quantity">${item.quantidade}</span>
            <button type="button" class="cart-plus">+</button>
          </section>
        </div>
      </div>
    `;

    const btnMais = produtoItem.querySelector(".cart-plus");
    const btnMenos = produtoItem.querySelector(".cart-minus");
    const btnRemover = produtoItem.querySelector(".cart__product--delete");

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

  badgeQuantity.textContent = totalItens;
}

renderizarCarrinho();

const btnCart = document.querySelector(".link__quantity");
const cart = document.querySelector(".cart");
const btnClose = document.querySelector(".cart__close");
const btnBuy = document.querySelector(".cart__buy");
const btnDeleteAll = document.querySelector(".cart__delete-all");

btnCart.addEventListener("click", (e) => {
  e.preventDefault();
  cart.classList.add("cart--active");
});

btnClose.addEventListener("click", () => {
  cart.classList.remove("cart--active");
});

btnBuy.addEventListener("click", () => {
  if (dados.carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  alert("Compra finalizada com sucesso!");
  dados.carrinho = [];
  renderizarCarrinho();
  cart.classList.remove("cart--active");
});
btnDeleteAll.addEventListener("click", (e) => {
  e.preventDefault();
  dados.carrinho = [];
  renderizarCarrinho();
});