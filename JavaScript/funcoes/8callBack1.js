const fabricantes = ["Mercedes", "Audi", "BMW"]

imprimir = (nome, index) => console.log(`${index + 1}. ${nome}`)


fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log(fabricante))