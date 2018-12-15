(function(){/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade. asssa
*/

var person = {
    name: 'Petrus',
    lastname: 'Ruffus',
    age:19
}

console.log( 'Propriedades de "person":' );


/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/

console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/

var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/

var objetoPai = {
    name: '' ,
    pages: 0
}

var the1984 =	Object.create(objetoPai);
the1984.name = "1984";
the1984.pages = 800;

var karamazov = Object.create(objetoPai);
karamazov.name = "The Brothers Karamazov";
karamazov.pages = 1400;

var domCasmurro = Object.create(objetoPai);
domCasmurro.name = "Dom Casmurro";
domCasmurro.pages = 300;


books = [the1984,karamazov,domCasmurro]

console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log(Object.keys(books))

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/

books.pop();

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.  ------------------------------------------------------------------------------
*/



/*
Converta os objetos que ficaram em `books` para strings.
*/
var stringBooks = JSON.stringify(books)

console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/

console.log(stringBooks);

/*
Converta os livros novamente para objeto.   ---------------------------------------------------------------------------------
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,   ---------------------------------------------------------------
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['P','E','D','R','O'];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/

myName.join();

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
myName.reverse();

console.log( '\n Agora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/

myName.sort();

});


// HERANÇA
// object.create() = herda valores mas nao é como uma referencia


// toStrinng = converte valor para string

// criar onj 
//     literal obj = {}
//     como construtor (new)   var newOnj = ((new)) Object()
//     obj interno, nativo do JS     Object.create()
//     propriedade prototype === prototipo/ instancia do obj sendo criado


// object.keys(obj) = array com propriedades do obj
// Object.hasOwnProperty
// obj.isPrototypeOf(obj2)

// JSON.stringify(obj)
// "{"x":2}"
// ~~~PARSEANDO PARA JSON




// --------------METODOS ARRAY ---------------------
// join() = junta itens em uma string
// reverse() = reverte ordem dos itens
// sort() =  poe em ordem alfabetica