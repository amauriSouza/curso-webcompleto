const valores = [7.7, 8.9, 9.0, 10.0];

console.log(valores);

console.log(`Qnts elementos: ${valores.length}`);

//insere info no array
valores.push({ id: 3 }, false, null, "ola");

console.log(valores);

//remove o ultimo elemento do array
console.log(valores.pop());

//remove o elemento indicado do array
delete valores[valores.indexOf(null)];
console.log(valores);

