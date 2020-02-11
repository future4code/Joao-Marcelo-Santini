const array = [1, 2, 3, 4, 5];
function calculaDadosParaArray(array) {
    let contadorImpar = 0;
    let somaArray = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            contadorImpar++;
        }
        somaArray += array[i];
    }
    const resposta = {
        quantidadeNumeros: array.length,
        quantidadeImpares: contadorImpar,
        somaTotalArray: somaArray,
    };
    return resposta;
}
const dadosResultado = calculaDadosParaArray(array);
console.log(dadosResultado);
//# sourceMappingURL=exer1.js.map