const soma = function(x, y){
	return x + y;
}

const imprimirResultado = function(a, b, op = soma){
	console.log(op(a, b))
}

imprimirResultado(2, 2)

imprimirResultado(2, 2, soma);

imprimirResultado(2, 2, function(x, y){
	return x - y;
});

// funcoes arrow sempre sera anonima
// logo que a msm nao se coloca nome

imprimirResultado(2, 2, (x, y) => x * y)

const pessoa = {
	falar: function(){
		console.log("Opa")
	}
}

pessoa.falar();
