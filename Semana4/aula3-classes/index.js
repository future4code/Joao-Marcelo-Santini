const arrayPost = []


class post {
    constructor(titulo, autor, texto) {
        this.titulo = titulo
        this.autor = autor
        this.texto = texto
    }
}


function postar() {
    const novoPost = new post()
    novoPost.titulo = document.getElementById('inputTitulo').value
    novoPost.autor = document.getElementById('inputAutor').value
    novoPost.texto = document.getElementById('textareaTexto').value


    // console.log(novoPost)

    arrayPost.push(novoPost)

    // console.log(arrayPost)

    teste() //chamando função limpar inputs

    addPostHTML() // chamando função de inserir no HTML




}


function addPostHTML() {
    const container = document.getElementById('areaDaPostagem')
    container.innerHTML = ""
    for (const potes of arrayPost) {
        container.innerHTML += "<h1>" + potes.titulo + "</h1>"
        container.innerHTML += "<h4>" + potes.autor + "</h4>"
        container.innerHTML += "<p>" + potes.texto + "</p>"
    }

}






function teste() {
    document.getElementById('inputTitulo').value = ''
    document.getElementById('inputAutor').value = ''
    document.getElementById('textareaTexto').value = ''
}