const array: number[] = [1, 2, 3, 4, 5]
type dados = {
    quantidadeNumeros: number,
    quantidadeImpares: number,
    somaTotalArray: number,
};

function calculaDadosParaArray(array: number[]): dados {
    let contadorImpar: number = 0
    let somaArray: number = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            contadorImpar ++
        }
    somaArray += array[i]

    }
    const resposta: dados = {
        quantidadeNumeros: array.length,
        quantidadeImpares: contadorImpar,
        somaTotalArray:somaArray,
    }

    return resposta
}

const dadosResultado: dados = calculaDadosParaArray(array)
console.log(dadosResultado)