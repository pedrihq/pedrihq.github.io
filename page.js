var navLaboratorio = document.querySelector("#nav-laboratorio");
const projetosLaboratorio = [
  {
    h1: "Calculadora",
    url: "img/img-projetos/calculadora-img.jpeg",
    p: "Uma calculadora simples criada com Next.js e Tailwind",
    href: "https://github.com/pedrihq/calculadora",
  },
  {
    h1: "Cardápio",
    url: "img/img-projetos/cardapio-de-sobremesa-img.jpeg",
    p: "Cardápio de sobremesas para desktop com Next.js, Tailwind e Lucide, simulando compras.",
    href: "https://github.com/pedrihq/cardapio-de-sobremesas",
  },
];

projetosLaboratorio.map((item) => {
  const caixa = document.createElement("a");
  caixa.classList.add("caixa-laboratorio");
  caixa.setAttribute("href", item.href);
  caixa.setAttribute("target", "_blank");

  const titulo = document.createElement("h1");
  titulo.innerHTML = item.h1;

  const img = document.createElement("img");
  img.classList.add("img-laboratorio");
  img.setAttribute("src", item.url);

  const paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.innerHTML = item.p;

  caixa.append(titulo, img, paragraph);
  navLaboratorio.appendChild(caixa);
});
