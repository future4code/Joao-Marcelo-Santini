// 1. 
//
//
//Ele pede para inserir 2 valores, o tipo do investimento e o valor que sera investido. Com isso ele entra no switch para ver qual o tipo do investimento, destro desse switch
// ele aplica a conta com base no valor investido.
// Nesse caso ele escolhei ações e colocou um valor de investimento 150. 
// A 1° menssagem é : 165
// A 2° menssagem é : TIPO DE INVESTIMENTO INFORMADO INCORRETO!
//
// -------------------------------------------------------------------------------------------------------

// 2.
// Utilizamos OBJETOS quando queremos modelar o mundo real de uma maneira mais proxima.  Adicionando varios valores a ele. Podemos percorrer esses valores como se fosse uma Array .

//------------------------------------------------------------------------------------

// 3.
// function criaRetangulo() {

//     let lado1 = document.getElementById("valorLado1").value;
//     let lado2 = document.getElementById("valorLado2").value;
//     let area = (lado1) * (lado2);
//     let perimetro = 2 * (parseInt(lado1) + parseInt(lado2));

//     let resultado = {
//         Largura: lado1,
//         Altura: lado2,
//         area,
//         perimetro,

//     }

//     console.log(resultado)

//     document.getElementById("respostaRetangulo").innerHTML = "Retangulo Altura x Largura " + resultado.Altura + "/" + resultado.Largura +
//         " perímetro é: " + resultado.perimetro + "  e a área é: " + resultado.area;

// }

// ------------------------------------------------------------------------------

// 4-

// const pessoa = {
//     nome: 'Luiz Gustavo',
//     idade: 25,
//     endereco: 'Rua Jasmim n° 20'
// }

// const anoni = {
//     ...pessoa,
//     nome: 'ANÔNIMO'
// }

// function anonimizarPessoa(anonimo) {
//     const container = document.getElementById("anoniPessoa")
//     container.innerHTML += anoni.nome + "<br>" + anoni.idade + "<br>" + anoni.endereco
// }


// anonimizarPessoa()



//-----------------------------------------------------------------------------------------------

// 5.

// const filme = {
//     nome: 'Matrix',
//     ano: 1999,
//     diretor: 'The Wachowskis',
//     atores: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],

// }

// function mostraFilme(infoFilme) {
//     const container = document.getElementById("filmes")
//     container.innerHTML += "<p>Venha assistir ao filme " + filme.nome + " de " + filme.ano + ", dirigido pelas irmãs " + filme.diretor + " e estrelado por " + "<br>" + filme.atores[0] + ", " + filme.atores[1] + ", " + filme.atores[2] + "."
//     "</p>"
// }

// mostraFilme("filme")


// -------------------------------------------------------------------------------------------------------------------------