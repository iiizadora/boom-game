const containerBaloes = document.querySelector(".container-baloes");
const elementPontuacao = document.querySelector("#updated-score");
let pontuacao = 0;

const iniciarGame = document.querySelector("#btn");
 iniciarGame.addEventListener("click",()=> comecarJogo());

function comecarJogo() {

  setInterval(adicionarBalao, 1000);
  
}

function adicionarBalao() {
  const elementoImg = document.createElement("img");

  elementoImg.setAttribute("src", "./assets/balloon.svg");
  elementoImg.setAttribute("class", "balao");

  const valorLeft = Math.round(Math.random() * 90); /
  const valorTop = Math.round(Math.random() * 90);


  elementoImg.style.left = valorLeft + "vw"; 
  elementoImg.style.top = valorTop + "vh";
  
  
  containerBaloes.appendChild(elementoImg); 


elementoImg.addEventListener("click", () => removeBalao(elementoImg,containerBaloes));

  }


function removeBalao(removeImg, containerElement ) {
  
  const boomAudio = new Audio("./sound/boom.mpeg");
  boomAudio.volume = 0.05;
  boomAudio.play();
  containerElement.removeChild(removeImg);
  
  pontuacao = pontuacao + 1
  elementPontuacao.textContent = pontuacao;

  
}



 

