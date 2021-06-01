const containerBaloes = document.querySelector(".container-baloes");

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

  elementoImg.addEventListener('click', clicar)
// função criada para remover a imagem quando for clicada
  function clicar() {elementoImg.remove(clicar)}
}

 setInterval(adicionarBalao, 2000); //3000 milesegundos = 3 segundos