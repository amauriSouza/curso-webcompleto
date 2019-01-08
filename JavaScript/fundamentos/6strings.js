const escola = "Cod3r";

//pega a letra no indice espeficado
console.log(escola.charAt(2));

//valor na tabela asc
console.log(escola.charCodeAt(3));

//retorna a localizacao do indice
console.log(escola.indexOf("d"));

//retorna a string apartir do indice
console.log(escola.substring(1));

//retorna a string apartir do indice com intervalo
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola));

//troca na const que contenha o numero 3 pela letra "e"
console.log(escola.replace(3, "e"));

//troca na const que contenha numeros, usando expressao regular 
// console.log(escola.replace(/\d/, "e"));

//troca na const que contenha numeros e letras, usando expressao regular 
// console.log(escola.replace(/\w/g, "e"));

//transforma em array, parametro passado para 
//indicar o elemento que vai separar, cada item do msm
//poder ser uma sting ou um regex '/,/'

console.log('Amauri, Gustavo, Paulo'.split(','))