var navLaboratorio = document.querySelector("#nav-laboratorio");
const projetosLaboratorio = [
  {
    h1: "Calculadora",
    url: "./img/calculadora-img.jpeg",
    p: "Uma calculadora simples criada com React.js e Tailwind",
  },
];

projetosLaboratorio.map((item) => {
  const caixa = document.createElement("div");
  caixa.classList.add("caixa-laboratorio");

  const titulo = document.createElement("h1");
  titulo.innerHTML = item.h1;

  const img = document.createElement("img");
  img.classList.add("img-laboratorio");
  img.setAttribute("src", item.url);

  const paragraph = document.createElement("p");
  paragraph.classList.add("paragraph")
  paragraph.innerHTML = item.p;

  caixa.append(titulo, img, paragraph);
  navLaboratorio.appendChild(caixa);
});
