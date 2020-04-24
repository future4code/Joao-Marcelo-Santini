"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOneEdit = (padrao, comparacao) => {
    // Começa comparando se ele é maior ou menor . Pq ai ja sai fora do one-edit e retorna false.
    if (comparacao.length > padrao.length + 1 ||
        comparacao.length < padrao.length - 1) {
        return false;
    }
    // Faz a contagem de caracteres palavra a ser comparada, que acada 1 caracterer , ele soma um na contagem. e retorna uma comparação de maior = ou menor = 
    //Que ela pode ser maior= + 1 ou menor = -1
    let contCaracteres = 0;
    for (const char of comparacao) {
        if (padrao.indexOf(char) !== -1) {
            contCaracteres++;
        }
    }
    return (contCaracteres <= padrao.length + 1 &&
        contCaracteres >= padrao.length - 1);
};
