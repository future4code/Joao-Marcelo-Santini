// Exercício aulta 4 Laços


// Exercício 1
//    Define (sum) como 0 . Para começar o laço ele define (i) como 0. Condição do laço para acontecer é valor: de i tem que ser menor que 11, e sempre q passar pelo laço soma + 1 no valor de i. Inicia uma ação de soma. que sum = sum+i.

//     sum = sum + i

//    0. 0 = 0+0
//    1. 0 = 0+1   >> sum pega o valor de 1.
//    2. 1 = 1+2  >
//    3. 3 = 3+3
//    4. 6 = 6+4
//    5. 10 = 10+5
//    6. 15 = 15+6
//    7. 21 = 21+7    
//    8. 28 = 28+8
//    9. 36 = 36+9
//    10. 45 = 45+10    Resultado de (sum) = 55


/**
 * Exercício 2
 * a. Comando push, atribui um novo valor a array.
 * b. [10, 15, 20 , 25, 30]
 * c. Todos números divisíveis por 3 dentro da lista. : 12, 15, 18, 27, 30.
 * Todos números divisíveis por 4. : 12 , 20 .
 * 
 * 
 * Exercício 3 (desafio)
 * 0
 * 00
 * 000
 * 0000
 * 
 * 
 * Exercicio 4
 * 
 * a.
 * 
 * const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let maior = array[0]
let menor = array[0]

for(let i = 0; i < array.length; i++){
    const el = array[i]
    const el2 = array[i]
    if (el > maior){
        maior = el
    }
    if (el2 < menor) {
        menor = el2
    }
}
console.log("Maior numero é,"+maior+" e o menor, "+menor)
 * 
 * 
 * 
 * b.
 * 
 * const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const array2= []
for(let i = 0; i < array.length;i++){
    el = array[i]
    el2 = el/10
    array2.push(el2)
}
console.log(array2)
 * 
 * 
 * 
 * c.
 * 
 * const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const array2= []
for(let i = 0; i < array.length;i++){
    el = array[i]
    el2 = el%2
    if (el2 !== 0){
        array2.push(el)
    }
}
console.log(array2)
 * 
 * d.
 * 
 * const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let i = 0; i < array.length;i++){
    el = array[i]

     console.log("O elemento do índex, "+i+" é "+el)
}

 * 
 * 
 */

const numeroS = prompt("Digite o número a ser adivinhado !!!!")
console.log("Vamos jogar !")
let i = 0
let numeroC = prompt("Chute o número!!!!")
    while (numeroC !== numeroS ){ 
        if (numeroC < numeroS ){
            console.log("O numero chutado foi! " +numeroC)
            console.log("Errou, é maior.")
        }
        else if (numeroC > numeroS) {
            console.log("O numero chutado foi! "+numeroC)
            console.log("Errou, é menor.")
        }
     }

    


    