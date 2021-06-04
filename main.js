const containerBaloes = document.querySelector(".container-baloes");
const elementPontuacao = document.querySelector("#updated-score");
let pontuacao = 0;


function adicionarBalao() {
  const elementoImg = document.createElement("img");
//adiciona um novo atributo que nesse caso está relacionado com <img src='' class=''>
  elementoImg.setAttribute("src", "./assets/baloon.png");
  elementoImg.setAttribute("class", "balao");

  const valorLeft = Math.round(Math.random() * 90); // para não quebrar a tela
  const valorTop = Math.round(Math.random() * 90);
  //para gerar números aleatórios e arredondados

  elementoImg.style.left = valorLeft + "vw"; // posição referente a tela 
  elementoImg.style.top = valorTop + "vh";
  //como o .balão está em position: absolute, precisa atribuir um left e top para ele
  
  containerBaloes.appendChild(elementoImg); // para adicionar o balão no container criado na section


elementoImg.addEventListener("click", () => removeBalao(elementoImg,containerBaloes));

  
}

/*
função criada para remover o balão com o click,passou 2 parâmetros :1 é da imagem que será removida:2º parâmetro é a classe que o elemento está referenciado. Dessa forma é possível raproveitar a função em outros lugares
 */


function removeBalao(removeImg, containerElement ) {
  
  const boomAudio = new Audio("./sound/boom.mpeg");
  boomAudio.volume = 0.05;
  boomAudio.play();
  containerElement.removeChild(removeImg);
  
  pontuacao = pontuacao + 1
  elementPontuacao.textContent = pontuacao;
  
    
}
 setInterval(adicionarBalao, 2000); //3000 milesegundos = 3 segundos