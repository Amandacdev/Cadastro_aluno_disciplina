class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(nome) {
        const nomeDisciplinaRemover = this.disciplinas.findIndex(disciplina => disciplina.nome === nome);
        if (nomeDisciplinaRemover > -1) {
            this.disciplinas.splice(nomeDisciplinaRemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }

    inserirAlunoNaDisciplina(aluno){
        

        
    }
}
