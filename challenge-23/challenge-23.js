(function(win,doc) {
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

  const $console = document.querySelector('[type="text"]');
 
  const $equalSignal = document.querySelector("#equals");
  const $clearButton = document.querySelector("#clear");

  const $allNumbers = document.querySelectorAll('[data-js="numbers"]');
  const $allOperators = document.querySelectorAll('[data-js="operators"]');

  const operators = ['+','-','*','/'];

  $clearButton.addEventListener("click", clear , false);
  $equalSignal.addEventListener("click", result , false);

  Array.prototype.forEach.call( $allOperators , concatOperators)
  Array.prototype.forEach.call( $allNumbers , concatNumbers )

  function clear(){ 
    $console.value = 0;  
  }

  function result(){
    popLastOperator();
  
  let numbers = $console.value.split(/[+*\/-]/)
  let operatorSignal = $console.value.match(/\D+/g)
  
  $console.value = matchOperation(operatorSignal.toString(),numbers)
  }

  function matchOperation(operator,number){    
    switch(operator){
      case '+':
        return Number(number[0]) + Number(number[1]); 
      case '-':
        return Number(number[0]) - Number(number[1]); 
      case '*':
        return Number(number[0]) * Number(number[1]); 
      case '/':
        return Number(number[0]) / Number(number[1]);  
      default:
        return '0'          
    }    
  }

  function concatOperators(button){

    button.addEventListener('click', _ => {
      $console.value =  handleDuplicateOperators(button);
      
    },false);
  }

  function concatNumbers(element) {

    element.addEventListener("click", _ => {
      if ($console.value != 0 || $console.value != element.value) {
        if ($console.value == 0) {
          $console.value = element.value;
        } else {
          $console.value += element.value;
        }
      }

    },false);
  }


  function handleDuplicateOperators(button){

    let splittedConsole = $console.value.split(''); 
    let lastElement = splittedConsole.slice(-1);
    //o ultimo é um operador?
    operators.some( item => item == lastElement) ? splittedConsole[splittedConsole.length-1] = button.value : splittedConsole.push(button.value)
    return splittedConsole.join('')
  }


  function popLastOperator(){
    let staggedConsole = $console.value.split('');
   if (
    staggedConsole[staggedConsole.length - 1] === '+' ||
    staggedConsole[staggedConsole.length - 1] === '-' ||
    staggedConsole[staggedConsole.length - 1] === '*' ||
    staggedConsole[staggedConsole.length - 1] === '/' 
    ){
      staggedConsole.pop();
    }  
    $console.value = staggedConsole.join('');
  }


})();
