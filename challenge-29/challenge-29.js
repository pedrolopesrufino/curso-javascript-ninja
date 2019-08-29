(function () {
  'use strict';



  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  let listaCarros = []

  class Carro{
    constructor(img,placa,ano,modelo,cor){
      this.img = img,
      this.placa = placa,
      this.ano = ano, 
      this.modelo = modelo,
      this.cor = cor
    }
  }

  document.querySelector('[type="button"]').onclick =
  
  function createNewCar(){
    listaCarros.push(new Carro(
      document.querySelector('[data-js="img"]').value, 
      document.querySelector('[data-js="placa"]').value ,
      document.querySelector('[data-js="ano"]').value ,
      document.querySelector('[data-js="modelo"]').value ,
      document.querySelector('[data-js="cor"]').value 
      ))
    console.log(listaCarros)
  }

  function reqCompanyData() {
    const xhr = new XMLHttpRequest()
    const url = './company.json'
    const isRequestOk = _ => xhr.readyState === 4 && xhr.status === 200;

    xhr.open('GET', url, true);
    xhr.send(null);
    xhr.onreadystatechange = _ => {

      if (isRequestOk()) {
        let company = JSON.parse(xhr.responseText);
        document.querySelector('[data-js="company-name"]').innerHTML =
          company.name;
          document.querySelector('[data-js="company-number"]').innerHTML =
          company.phone
      }
    }
  }

  function app() {
    return {

      init: function init() {
        this.companyInfo();
      },
      
      companyInfo: reqCompanyData
    }
  }
  app().init();
})(window.DOM);
