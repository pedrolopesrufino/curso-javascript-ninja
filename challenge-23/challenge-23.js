(function() {
  "use strict";
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:
  
  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;
  
  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  let $console = document.querySelector('[type="text"]');

  const $sumSignal = new Signal(document.querySelector("#plus"));
  const $minusSignal = new Signal(document.querySelector("#minus"));
  const $multipllySignal = new Signal(document.querySelector("#multiplly"));
  const $divideSignal = new Signal(document.querySelector("#divide"));
  const $x = new Signal(document.querySelector("#x"));


  const $equalSignal = document.querySelector("#equals");
  const $clearButton = document.querySelector("#clear");

  const $allNumbers = document.querySelectorAll(".numbers");

  $sumSignal.description = "soma";

  const $allOperators = [
    $sumSignal.hisId,
    $minusSignal.hisId,
    $multipllySignal.hisId,
    $divideSignal.hisId
  ];
  console.log($x)

  function Signal(hisId) {
    (this.hisId = hisId),
      (this.hisSignal = hisId.value),
      (this.operation = function(a, b) {
        return console.log(a, this.signal, b);
      })
  }
  $x.hisId.addEventListener('click',function(){
    $console = $console + $x.hisSignal;
  })

  $allNumbers.forEach(function(element) {
    element.addEventListener("click", function() {
      if ($console.value != 0 || $console.value != element.value) {
        if ($console.value == 0) {
          $console.value = element.value;
        } else {
          $console.value += element.value;
        }
      }
    });
  });

  $allOperators.forEach(function(el){
    el.addEventListener("click",function(){
      $console.value += el.hisSignal;
    })
  })

  $clearButton.addEventListener("click", _ => ($console.value = 0));

  $equalSignal.addEventListener("click", function() {});
})();
