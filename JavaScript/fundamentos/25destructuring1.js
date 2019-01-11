// Novo recurso do ES2015
const Pessoa = {
  nome: "Amauri",
  idade: 20,
  endereco: {
      rua: 'Erico',
      num: 366
  }
};

const { nome, idade } = Pessoa;

console.log(`${nome} e sua idade: ${idade}`)

//atribuindo nomes as variaveis
const { nome: n, idade: i } = Pessoa;

console.log(`${n} e sua idade: ${i}`)


//atribuindo valores a atributos que nao existe no obj
const { bemHumorada = true } = Pessoa;

console.log(bemHumorada)

//pegando atributos de um obj dentro de outro
const { endereco: {rua, num} } = Pessoa;

console.log(rua)


