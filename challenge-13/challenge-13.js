(function() {
	/*
	Envolva todo o código desse desafio em uma IIFE.
	*/
  
	/*
	Crie um array e mostre no console a representação em String desse array,
	usando o método visto na aula 13.
	*/
	console.log( 'O array em formato de string é:' );
	var arr = ['libertas ','quae ', 'sera ','tamen '];
	
	console.log( arr.join('') )
	/*
	Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
	Cada array deve conter os estados dessa região.
	*/
	var sul = [	'Rio Grande do Sul' , 'Santa Catarina' , 'Paraná']
	var sudeste = [ 'São Paulo' , 'Minas Gerais' , 'Rio de Janeiro' , 'Espírito Santo']
  
	/*
	Crie uma variável chamada `brasil`, que irá receber as duas regiões
	concatenadas. Mostre o `brasil` no console.
	*/
	console.log( '\nAlguns Estados do Brasil:' );
	var brasil = sul.concat(sudeste)
  console.log(brasil)
	/*
	Adicione 3 novos estados da região Norte no início do array e mostre no console.
	*/
	console.log( '\nMais estados adicionados:' );
	brasil.unshift('Roraima' , 'Acre' , 'Amazonas');
	console.log(brasil);
  
	/*
	Remova o primeiro estado do array `brasil` e mostre-o no console.
	*/
	console.log( '\nEstado removido:' );
	console.log( brasil.shift() );
  
	/*
	Crie um novo array chamado `newSul`, que receba somente os estados do sul,
	pegando do array `brasil`. Não remova esses itens de `brasil`.
	*/
	var newSul = brasil.slice(3,6);

	/*
	Mostre no console os estados que estão em `newSul`.
	*/
	console.log( '\nEstados do Sul do Brasil:' );	
	for (var i in newSul){
		console.log(newSul[i]);
	}

	/*
	Mostre no console todos os estados que estão em `brasil`.
	*/
	console.log( '\nAlguns Estados do Brasil:' );
	
	for (var i in brasil){
		console.log(brasil[i]);
	}
	/*
	Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
	*/
	
	var nordeste = ['Bahia','Paraíba','Sergipe','Rio Grande do Norte', 'Pernambuco', 'Maranhão','Ceará', 'Piauí','Alagoas']


	/*
	Mostre no console os estados do nordeste.
	*/
	console.log( '\nEstados do Nordeste:' );
	
	for (var i in nordeste){
		console.log(nordeste[i]);
	}

	/*
	Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
	chamada `newSudeste`.
	*/
	
	var newSudeste = brasil.splice(6,10)

	/*
	Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
	ficar no mesmo nível que os estados já existentes, não em um array separado.
	*/
	
	for (var count in nordeste){
		brasil.push(nordeste[count])
	}

	/*
	Mostre no console os estados em `newSudeste`.
	*/
	console.log( '\nEstados em newSudeste:' );
	for (var i in newSudeste){
		console.log(newSudeste[i]);
	}

	/*
	Mostre no console os estados do `brasil`.
	*/
	console.log( '\nAlguns estados do Brasil:' );
	for (var i in brasil){
		console.log(brasil[i]);
	}

	/*
	usando forEach, percorra o array `brasil` e gere um novo array chamado
	`newBrasil`. Esse array deve ter cada item como um objeto, com as
	propriedades:
	- `id`: que será o índice do array `brasil`,
	- `estado`: que será o estado do array `brasil`.
	*/
	
	var newBrasil = []
	
	var i = 0; 	
	brasil.forEach( function(item,index){
		newBrasil[i] = {
			id	: index,
			estado: item
		}
		
		i++;
	});


	/*
	Mostre o array `newBrasil` no console
	*/
	console.log( '\nnewBrasil:' );

	for(var y in newBrasil){
		console.log(newBrasil[y]);
	}

	/*
	Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
	atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
	- "Sim, todos os estados tem mais de 7 letras!"
	Senão, mostre no console:
	- "Nem todos os estados tem mais de 7 letras!"
	*/
	console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
	
	var isMoreThan7 = brasil.every( function (item) {
		item.length >=7;
	});

	console.log( isMoreThan7 ? 'Sim, todos os estados tem mais de 7 letras!' :  'Nem todos os estados tem mais de 7 letras!');

	/*
	Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
	resultado à uma variável. Se esse estado existir no array, mostrar a frase no
	console:
	- "Ceará está incluído!"
	Senão, mostrar a frase:
	- "Ceará não foi incluído :("
	*/
	console.log( '\nCeará está incluído em `brasil`?' );
  var hasCeara = brasil.some( function ( item ){
		return item === 'Ceará';
	})

	console.log( hasCeara ? 'Ceará está incluído!' : 'Ceará não foi incluído')

	/*
	Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
	objeto desse array, e adicione a frase abaixo na propriedade `estado`:
	- "[ESTADO] pertence ao Brasil."
	Atribua o novo array a uma variável chamada `map`.
	*/
	
	var map = newBrasil.map (function (item,index) {
		item.estado += ' pertence ao Brasil'; 
		item.id += 1;

		return item;
	})	

	

	/*
	Mostre no console o array criado acima:
	*/
	console.log( '\n newBrasil agora com mais informações:' );
	for (var runner in map){
		console.log(map[runner])
	}

	/*
	Filtre o array criado acima, retornando somente os estados que tiverem
	ID par. Atribua o valor à uma variável chamada `filter`.
	*/
	var filter = map.filter( function (item){
			return item.id % 2 === 0;
		
	})/

	/*
	Mostre o array filtrado acima no console.
	*/
	console.log( '\nEstados com ID par:' );
	for (var count in filter){
		console.log ( filter[count] );
	}
});
