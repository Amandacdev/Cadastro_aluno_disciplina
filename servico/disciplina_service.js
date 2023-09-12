class DisciplinaService {

    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {

        if (codigo == '' || nome == '') {
            window.alert('Preencha os campos.');
        } else {
            const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
            if (disciplinaPesquisada.length > 0) {
                window.alert('Disciplina já foi cadastrada');
            } else {
                const disciplinaNova = new Disciplina(codigo, nome);
                this.repositorio.inserir(disciplinaNova);
                return disciplinaNova;
            }

        }
    }




    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

}