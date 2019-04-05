 (function(){
   'use strict';
 /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  const $bin = document.querySelector('[data-js="bin"]')
  const $figure = document.querySelector('[data-js="figure"]')
  const txt = document.querySelector('[data-js="quote"]')


  $figure.addEventListener('drag', _ =>  $figure.style.opacity=0.5 ,false)
  $figure.addEventListener('dragend', _ => handleDropped($figure),false)

  function handleDropped()  {
    changeBin()
    changeText()
    $figure.src='';
  }
  
  const changeBin = _ =>     $bin.style.backgroundImage = "url('img/rec-bin.png')";
  const changeText = _ => txt.innerHTML='<h1>good job</h1>'; 

})();