let isAtivo = false

console.log(isAtivo)

isAtivo = 1;

// javascript - aceita o valor == 1 == true && valor == 0 == false
console.log(!!isAtivo)

// isAtivo = !isAtivo;

// teste if ternario 
console.log(isAtivo == true ? 'Ola mundo' : 'Error')


// console.log(!false)


//realiza a comparacao, se foi preenchido a variavel
let nome = '';

console.log(nome || 'Nao identificado')