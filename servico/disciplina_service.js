class DisciplinaService {

    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.lenght > 0) {
            throw new error('Disciplina já foi cadastrada');
        }

        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
        
    }


    pesquisarPorCodigo(nome) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

}