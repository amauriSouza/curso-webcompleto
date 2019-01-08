// funcao armazenada em uma variavel

// function msg(nome){
//     return `Ola ${nome}`;
// }

// const resultado = msg('Amauri')

// console.log(resultado)

//quando nao tem nome, se chama funcao anonima
const imprimirSoma = function(nome) {
  console.log(`Ola ${nome}`);
};

imprimirSoma("Amauri");

// arrow function - retorno explicito
const sub = (num1, num2 = 2) => {
  return num1 - num2;
};

console.log(sub(4));
console.log(sub(4, 2));


// arrow function - retorno implicito
//ainda, se tiver um unico parametro e sem um valor padrao pro parametro, 
//pode tirar os parenteses
const soma = (num1, num2 = 12) => num1 + num2;

console.log(soma(2));
console.log(soma(2, 2));
