(function() {
  "use strict";

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  let $cep = document.querySelector('[name="cep-input"]');
  const $msgError = document.querySelector("[data-js='message-error']");
  const $button = document.querySelector('[type="button"]');

  $cep.addEventListener("keyup", function() {
    mascararCep($cep);
  });

  $button.addEventListener("click", function() {
    buscarCep($cep.value);
  });

  function mascararCep(input) {
    return (
      (input.value = input.value.replace(/\D/g, "")),
      (input.value = input.value.replace(/(\d{5})/, "$1" + "-"))
    );
  }

  function buscarCep(cep) {
    cep = cep.replace(/\D/, "");

    const xhr = new XMLHttpRequest();
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    xhr.open("GET", url, true);
    xhr.send(null);

    xhr.onreadystatechange = _ => {
      if (xhr.readyState == 3) {
        $msgError.innerHTML = `buscando resultados para "${$cep.value}"`;
      }

      if (xhr.readyState == 4) {
        let endereco = JSON.parse(xhr.responseText);
        if (!!endereco.uf) {
          return (
            (document.querySelector('[name="logradouro"]').value =
              endereco.logradouro),
            (document.querySelector('[name="complemento"]').value =
              endereco.complemento),
            (document.querySelector('[name="bairro"]').value = endereco.bairro),
            (document.querySelector('[name="municipio"]').value =
              endereco.localidade),
            (document.querySelector('[name="uf"]').value = endereco.uf),
            ($msgError.innerHTML = "")
          );
        } else {
          $msgError.innerHTML = `não encontramos resultados para "${
            $cep.value
          }"`;
        }
      }
    };
  }
})();
