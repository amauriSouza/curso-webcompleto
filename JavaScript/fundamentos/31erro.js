function tratamentoErro(erro) {
    // throw new Error('Erro')
    // throw 'Deu erro'
    // throw 10
    throw {
        message: erro.message
    }
}

function imprimeNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase());
    } catch (error) {
        tratamentoErro(error)
    } finally{
        console.log("Fim")
    }
}

const obj = {
    nome: 'Amauri'
}

imprimeNomeGritando(obj)