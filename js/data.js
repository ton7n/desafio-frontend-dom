const dados = {
  produtos: [
    {
      id: "1",
      nome: "Espresso",
      imagem: "./image/product-01.png",
      descricao: "Imagine um café espresso como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 800, por: 600 },
      vegano: true,
      categoria: "classicos"
    },
    {
      id: "2",
      nome: "Americano",
      imagem: "./image/product-02.png",
      descricao: "Imagine um café Americano como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 800, por: 600 },
      vegano: true,
      categoria: "classicos"
    },
    {
      id: "3",
      nome: "Café com leite",
      imagem: "./image/product-03.png",
      descricao: "Imagine um Café com leite como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 1000, por: 800 },
      vegano: false,
      categoria: "classicos"
    },
    {
      id: "4",
      nome: "Café com leite",
      imagem: "./image/product-04.png",
      descricao: "Imagine um Café com leite como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 1000, por: 1000 },
      vegano: false,
      categoria: "classicos"
    },
    {
      id: "5",
      nome: "Latte",
      imagem: "./image/product-05.png",
      descricao: "Imagine um Latte como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 1000, por: 1000 },
      vegano: false,
      categoria: "classicos"
    },
    {
      id: "6",
      nome: "Macchiato",
      imagem: "./image/product-06.png",
      descricao: "Imagine um Macchiato como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 1000, por: 800 },
      vegano: false,
      categoria: "classicos"
    },
    {
      id: "7",
      nome: "Mocha",
      imagem: "./image/product-07.png",
      descricao: "Imagine um Mocha como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 1000, por: 800 },
      vegano: false,
      categoria: "classicos"
    },
    {
      id: "8",
      nome: "Irish Coffee",
      imagem: "./image/product-08.png",
      descricao: "Imagine um Irish Coffee como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 1000, por: 800 },
      vegano: false,
      categoria: "classicos"
    },
    {
      id: "9",
      nome: "Cold Brew",
      imagem: "./image/product-09.png",
      descricao: "Imagine um Cold Brew como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 1000, por: 800 },
      vegano: true,
      categoria: "gelados"
    },
    {
      id: "10",
      nome: "Frappuccino",
      imagem: "./image/product-10.png",
      descricao: "Imagine um Frappuccino como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 1000, por: 800 },
      vegano: false,
      categoria: "gelados"
    },
    {
      id: "11",
      nome: "Café gelado com laranja e tônica",
      imagem: "./image/product-11.png",
      descricao: "Imagine um Café gelado com laranja e tônica como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 1000, por: 800 },
      vegano: true,
      categoria: "gelados"
    },
    {
      id: "12",
      nome: "Milk shake de café",
      imagem: "./image/product-12.png",
      descricao: "Imagine um Milk shake de café com laranja e tônica como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      preco: { de: 1000, por: 800 },
      vegano: true,
      categoria: "gelados"
    }
  ],
  carrinho: [
    {
      id: "6b9f",
      idProduto: "4",
      nome: "Café com leite",
      imagem: "./image/product-04.png",
      preco: 1000,
      vegano: false,
      quantidade: "3",
    },
    {
      id: "43c7",
      idProduto: "3",
      nome: "Café com leite",
      imagem: "./image/product-03.png",
      preco: 800,
      vegano: false,
      quantidade: 3,
    },
    {
      id: "7c28",
      idProduto: "6",
      nome: "Macchiato",
      imagem: "./image/product-06.png",
      preco: 800,
      vegano: false,
      quantidade: 1,
    },
    {
      id: "613a",
      idProduto: "10",
      nome: "Frappuccino",
      imagem: "./image/product-10.png",
      preco: 800,
      vegano: false,
      quantidade: 2,
    },
    {
      id: "ee5c",
      idProduto: "5",
      nome: "Latte",
      imagem: "./image/product-05.png",
      preco: 1000,
      vegano: false,
      quantidade: 1,
    },
    {
      id: "38c4",
      idProduto: "2",
      nome: "Americano",
      imagem: "./image/product-02.png",
      preco: 600,
      vegano: true,
      quantidade: 1,
    },
    {
      id: "75eb",
      idProduto: "8",
      nome: "Irish Coffee",
      imagem: "./image/product-08.png",
      preco: 800,
      vegano: false,
      quantidade: 1,
    }
  ]
};
export {dados};