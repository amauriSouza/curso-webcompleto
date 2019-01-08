//armazena o endereco do object
const a = { name: "Teste" };
console.log(a);

//armazena tbm o endereco do object, atribuicao por referencia
const b = a;
b.name = "Opa";
console.log(b);

console.log(a);

let c = 3;

//copia por valor - com dados primitivos
let d = c;

d++;

console.log("Valor C: " + c);

console.log("Valor D: " + d);

//undefined - nao inicializada
let valor
console.log(valor)

// null - ausencia de valor (nao aponta para nenhum local de memoria)
valor = null

console.log(valor)

const produto = {}
// remover atributo do object
delete produto.preco
console.log(produto)

produto.preco = 0;
console.log(produto)