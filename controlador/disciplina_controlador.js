class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {

        const nome = document.querySelector("#nomeDisc").value;
        const codigo = document.querySelector("#codigo").value;

        const discInserida = this.servico.inserir(nome,codigo);

        const listaDiscElemento = document.querySelector("#listaDisc");
            
            if (discInserida) {
                this.inserirDiscNoHtml(discInserida, listaDiscElemento);
            }
        

    }

    inserirDiscNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina.nome} - Nome: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

}