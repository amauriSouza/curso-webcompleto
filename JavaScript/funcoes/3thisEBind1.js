const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao);
  }
};

pessoa.falar();

const teste = pessoa.falar();

teste;


const falarDePessoa = pessoa.falar.bind(pessoa);

falarDePessoa();
