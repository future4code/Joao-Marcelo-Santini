import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


//  Estou fazendo o desafio 10, mas ja estou enviado . =)


    let userN =[]
    let userV = []
    let user
    let pcN = []
    let pcV = []
    let pc
    let i = 0
    let resultado
  


    console.log("Bem vindo ao jogo de Blackjack!")
    
    
    if (confirm("Quer iniciar uma nova rodada?")){
        while (i<2) {
        const carta = comprarCarta();
        userN.push(carta.texto)
        userV.push(carta.valor)
        const carta2 = comprarCarta();
        pcN.push(carta2.texto)
        pcV.push(carta2.valor)

        i++
    }

          user = Number(userV[0]+userV[1])
          pc = Number(pcV[0]+pcV[1])
          
          if(pc === 22 || user === 22){

        while (i<2) {
        const carta = comprarCarta();
        userN.push(carta.texto)
        userV.push(carta.valor)
        const carta2 = comprarCarta();
        pcN.push(carta2.texto)
        pcV.push(carta2.valor)

        i++
    }
              
    }
        

    if (confirm("Suas cartas são, "+userN[0]+""+userN[1]+". A carta revelada do computador é "+pcN[0]+ "\n"+ "Deseja comprar mais uma carta?")) {
        const carta3 = comprarCarta()
        userN.push(carta3.texto)
        userV.push(carta3.valor)
        user = user + userV[2]

        if ( user < 21) {
            
        }

    }

    
          if (user > pc) {
            console.log("O usuario ganhou")
          } else if (user< pc){
              console.log("O computador ganhou")
          } else  { 
            console.log("Empate")
          }
        
        console.log("Usuário - Cartas: "+ userN[0]+" "+userN[1]+" Pontuação "+user)
        console.log("Computador - Cartas: "+pcN[0]+" "+pcN[1]+" Pontuação "+pc)
        
       
        
    }
         else{ console.log("O jogo acabou.")}