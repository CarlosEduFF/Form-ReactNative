function saudacao(pessoa) {
    return "Ol\u00E1, ".concat(pessoa.nome, "! Voc\u00EA tem ").concat(pessoa.idade, " anos.");
}
var maria = {
    nome: 'Maria'
};
console.log(saudacao(maria));
