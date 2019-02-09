let dobro = function(a){
	return 2 * a;
}

dobro = (a) => {
	return 2 * a;
}

dobro = a => 2 * a; // retorno implicito

console.log(dobro(2));

ola = () => 'Ola';
// ou
ola = _ => 'Ola'; //possue parametro, porem pode ser ignorado

console.log(ola());