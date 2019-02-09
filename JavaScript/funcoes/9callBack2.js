const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

const notasBaixas1 = []

for (let i in notas){
	if(notas[i] < 7){
		notasBaixas1.push(notas[i])
	}
}

console.log(`S/Callback: ${notasBaixas1}`)

// Com callback

const notasBaixas2 = notas.filter(function(nota){
	return nota < 7
})

console.log(`C/Callback: ${notasBaixas2}`)

// Com callback e arrow
const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(`C/Callback e arrow: ${notasBaixas3}`)
