// sem retorno - com parametro padrao
function somaVoid(num1, num2 = 0){
    console.log(num1 + num2);
}

somaVoid(2)
// somaVoid(2,2)

function somaRetorno(num1, num2){
    return num1 + num2;
}

console.log(somaRetorno(2,2));

