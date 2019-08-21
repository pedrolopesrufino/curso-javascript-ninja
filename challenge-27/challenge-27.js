(function(){
  'use strict';

/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/


function DOM(elements){
  this.element = this.getDOMElements(elements)
  
}

DOM.verify = function verify(argument){
  return typeof(argument);
}

DOM.prototype.reduce((acc,item,index) =>{})
DOM.prototype.reduceRight((acc,item,index) =>{}) 
DOM.prototype.map((item,index) =>{})
DOM.prototype.filter((item,index) =>{})
DOM.prototype.every((item,index) =>{})
DOM.prototype.some((item,index) =>{})


//pega e gera elementos do dom
DOM.prototype.getDOMElements = function getDOMElements(elements){
  return document.querySelectorAll(elements);
}

DOM.prototype.on = function on(eventType, callback){
  Array.prototype.forEach.call(this.element, function(element){
    element.addEventListener(eventType,callback,false);
})
};
DOM.prototype.off = function off(eventType,callback){
  Array.prototype.forEach.call(this.element, function(element){
    element.removeEventListener(eventType,callback,false);
})
};
DOM.prototype.get = function get(){
  return this.element
};


})();