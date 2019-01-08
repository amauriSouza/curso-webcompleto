const peso = 1.0;

const peso2 = Number('2.0')

console.log(peso, peso2)

console.log(Number.isInteger(peso2))

const ava1 = 9.871;
const ava2 = 6.871;

const total = ava1 * peso + ava2 * peso2

const media = total / (peso + peso2)

console.log(media)

// matar casa decimais
console.log(media.toFixed(2))

// passando algum parametro(type number) no toString, no caso 2 ele converte para base 2
console.log(media.toString(2))

console.log(Number.isInteger(media))


