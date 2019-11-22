const arrayGastos = []


class gasto {
    constructor(tipo, valor) {
        this.tipo = tipo
        this.valor = valor
    }

}


function cadastrar() {
    const novoGasto = new gasto()
    novoGasto.tipo = document.getElementById('tipoDespesa').value
    novoGasto.valor = document.getElementById('inputValor').value

    if (novoGasto.valor == "") {
        alert('Prencha os dados corretamente!')

    } else {

        console.log(novoGasto) //Verificando se pegou os valores certos.

        arrayGastos.push(novoGasto)

        console.log(arrayGastos) //Verificando valores na array.

        addPostHTML()

    }

}


function addPostHTML() {
    const container = document.getElementById('listaDespesas')
    container.innerHTML = ""
    for (const cadastro of arrayGastos) {
        container.innerHTML += "<p>" + "  Tipo: " + cadastro.tipo + " Valor: " + cadastro.valor + "</p>"
    }

}



function filtrar() {
    const valorMaximo = ""
    const valorMinimo = ""
    const despesasFiltrada = arrayGastos.filter(arrayGastos => {

        return arrayGastos.valor < valorMaximo && arrayGastos.valor > valorMinimo
    })

    console.log(valorMaximo)
}