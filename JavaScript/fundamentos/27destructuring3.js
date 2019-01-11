function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand({ max: 50, min: 40 }));

function soma({ num1 = 0, num2 = 0 }) {
  return num1 + num2;
}

console.log(soma({ num1: 5, num2: 5 }));

const numeros = {
  num1: 10,
  num2: 10
};
console.log(soma(numeros));
