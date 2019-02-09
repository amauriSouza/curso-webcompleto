let comparaComThis = function(param){
	console.log(this === param)
}

// global é objeto no contexto do node
//igual o window no contexto do browser
comparaComThis(global);

const obj = {}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(global);

comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)

comparaComThisArrow(obj)

comparaComThisArrow(module.exports)