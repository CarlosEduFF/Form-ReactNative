interface Pessoa {
    nome: string;
    idade: number;
}

function saudacao(pessoa: Pessoa) {
    return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`;
}

let maria = {
    nome: 'Maria'
};
console.log(saudacao(maria));
