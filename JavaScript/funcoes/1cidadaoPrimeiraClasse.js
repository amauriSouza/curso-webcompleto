//forma literal 
function f1() { }

//armazenando em uma variavel
const f2 = function () { }

//armazenando em um array
const array = [function f3(a, b) { return a + b }, f1, f2]

console.log(array[0](2, 3))

//armazenando em um atributo do obj
const obj = { teste: function () { return 'Teste' } }

obj.falar = function () { return "Opa" }

console.log(obj.falar())
console.log(obj.teste())

//funcoes dentro de funcoes
function run(fun) {
    fun()
}

run(function () { console.log('Executando') })

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)

const cincoMais = soma(2, 3)
cincoMais(4)