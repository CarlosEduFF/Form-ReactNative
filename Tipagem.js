function saudacao(pessoa) {
    return "Ol\u00E1, ".concat(pessoa.nome, "! Voc\u00EA tem ").concat(pessoa.idade, " anos.");
}
var joao = {
    nome: 'João',
    idade: 25
};
console.log(saudacao(joao));
