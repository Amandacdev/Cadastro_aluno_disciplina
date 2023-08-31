
class Disciplina {

    constructor(codigo, nome) {
        this._nome = nome;
        this._codigo= codigo;


        this.alunos = [];
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(novoCodigo) {
        this.codigo = novoCodigo;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

}

