export const checkOneEdit = (padrao: string, comparacao: string): boolean => {


    if (
        comparacao.length > padrao.length + 1 ||
        comparacao.length < padrao.length - 1
    ) {
        return false;
    }

  

    let contCaracteres = 0;

    for (const char of comparacao) {
        if (padrao.indexOf(char) !== -1) {
            contCaracteres++;
        }
    }

    return (
        contCaracteres <= padrao.length + 1 &&
        contCaracteres >= padrao.length - 1
    );
};

