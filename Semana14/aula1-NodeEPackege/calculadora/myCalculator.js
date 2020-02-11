const op = process.argv[2];
const numero1 = Number(process.argv[3]);
const numero2 = Number(process.argv[4]);
let result = 0

switch (op) {
    case "ADD":
        try{
            result = numero1 + numero2
            console.log(`O resultado da soma de ${numero1} mais ${numero2} é igual à: ${result}`)
        } catch (error) {
            console.error(error)
        }
        break;
    case "SUB":
            result = numero1 - numero2
            console.log(`O resultado da subtração de ${numero1} menos ${numero2} é igual à: ${result}`)
        break;
    case "MULT":
            result = numero1 * numero2
            console.log(`O resultado da multiplicação de ${numero1} vezes ${numero2} é igual à: ${result}`)
        break;
    case "DIV":
            result = numero1 / numero2
            console.log(`O resultado da divisão de ${numero1} dividido ${numero2} é igual à: ${result}`)
        break;
    default:
        return false
}