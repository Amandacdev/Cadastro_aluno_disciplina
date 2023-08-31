class DisciplinaService {

    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorNome(nome);
        if (disciplinaPesquisada > 0) {
            throw new Error('Disciplina já cadastrada!');
        }

        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }


    pesquisarPorNome(nome) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.nome === nome);
    }

}