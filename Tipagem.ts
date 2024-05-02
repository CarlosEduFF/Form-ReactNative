interface Pessoa {
    nome: string;
    idade: number;
}

function saudacao(pessoa: Pessoa) {
    return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`;
}

let joao = {
    nome: 'João',
    idade: 25
};

console.log(saudacao(joao));
