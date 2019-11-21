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


    console.log(novoPost)

}