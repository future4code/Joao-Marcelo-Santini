
/**
 * Comece seu exercício aqui! :D
 * 
 * Exercicio de interpretação.
 * 
 * 1.
 * Código pede para digitar um numero. Que é armazenada em uma variavel.
 * Cria outra variavel para classificar como Number o numero.
 * Numero entra em um teste. De moludo ( define se é par ou impar), que se o numero for = a 0 (par) , ele passa no teste, se não ele vai para outra resposta, que não passa no teste. 
 * 
 * 2.
 * 
 * a.
 * Código serve para saber o preço da fruta. Que o operador insirir no prompt.
 * 
 * b.
 * Se a fruta for Maçã sera impresso o valor de 2.25 .
 * 
 * c.
 * Creio eu que seria 3.5, pois não tem comando para soma.No entando, o valor total seria. 2 Laranja = 7 , 1 Maçã= 2.25 , 3 Bananas = 15 , 1 Uva = 0.30. TOTAL = 24.55 .
 * 
 * d.
 * Seria 5.5 .
 * 
 * 3-
 * Haverá um erro, creio que esse erro se dará por causa da variavel mensagem.
 * Pois ela esta dentro do escopo filho, e o console.log pede essa variavem no escopo/bloco pai. Sendo assim o escopo/bloco pai não consegue pegar o valor dessa variavel do escopo/bloco filho. Dando um erro de falta da variave. "missing mensagem".
 * 
 * 
 * 
 * Exercicio de escrita!
 * 
 * 1-
 * a.
 * numero1 = Number(prompt("Digite um numero!"))
    numero2 = Number(prompt("Digite outro numero!"))
   
        if (numero1 === numero2) {
            console.log("Os numeros são iguais !")
    }
        else if (numero1 > numero2 ) {
            console.log(numero1, numero2)

    }
 * 
 * b.
 *   numero1 = Number(prompt("Digite um numero 1°"))
    numero2 = Number(prompt("Digite outro numero 2°"))
    numero3 = Number(prompt("Digite outro numero 3°"))
        
     if (numero1 === numero2 || numero1 === numero3){
         console.log("Numeros iguais.")
         }

     else if (numero1 > numero2 || numero1 > numero3 || numero2 > numero3){
         console.log(numero1,numero2,numero3)
     }
     else if (numero2 > numero1 || numero2 > numero3 || numero1 > numero3){
         console.log(numero2,numero1,numero3)
     }
         else if (numero3 > numero1 || numero3 > numero2 || numero2 > numero1){
         console.log(numero3,numero2,numer1)
     }
        else if (numero3 > numero1 || numero3 > numero2 || numero1 > numero2){
         console.log(numero3,numero1,numero2)

        }
 *  OBS ; B esta incompleta , não consegui, pulei . !
 * 
 * 
 * 
 * 2-
 * a. https://imgur.com/a/3OubaR0
 * 
 * 
 * b.
 * 
 * 
 * 
 * let condicao = prompt("Tem ossos ? s/n")

   if(condicao === "n") {
       console.log("É invertebrado.")
    } 
    
        else if (condicao === "s") {
            condicao = prompt("Tem pelos? s/n")
            
            if(condicao === "s") {
             condicao = prompt("É racional?")
            
            if(condicao === "s"){
            console.log("É humano")
            } 
            
            
            else {
               console.log("É mamifero não humano")
             }
        }
    
    else if (condicao === "n"){
    condicao = prompt("Tem penas?")

    if (condicao === "n"){
    condicao = prompt("É terrestre?")
    if (condicao === "s"){
    condicao = prompt("Viver parte da vida dentro da agua?")
    if (condicao === "s"){
        console.log ("É um anfíbio.")
    }
    else {
        console.log("É um Réptil.")
    }

    }
    else {
        console.log("É um peixe.")
    }
  }
 
 else {
     console.log("É uma ave.")
 }
 }
 }
 * 
 * */



var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(test)

var adicionar = test.push(16);

console.log(test)

var n = St

console.log(test)


console.log(test[0])
