const obj1 = {};

obj1.nome = "Amauri";

console.log(obj1);

function obj(nome) {
  this.nome = nome;
}

obj('Amauri')
console.log(nome)