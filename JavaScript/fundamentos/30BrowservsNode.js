//aqui nao esta no scopo global/window, acontece tbm com const
//ja com var funciona
var c = "Texto"
let a = 123

global.b = 123

console.log("Nao esta no scopo global: "+global.a)

console.log("Esta no scopo global: "+global.b)

console.log(c)

// para escapar do escopo global e nao estragar: use objeto


