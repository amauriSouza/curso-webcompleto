// uso de var permite a redeclaracao da mesma variavel
var a = "valor a";

var a = "valor a";

// uso de let nao permite
let b = "valor b";

b = "novo valor b";

//const quando o valor nao vai mudar durante a execucao
const c = 50;

console.log(a, b, c);
