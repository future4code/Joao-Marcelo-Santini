function criarCadastro() {
    let cadastro = {
        nome: document.getElementById('cadastroNome').value,
        idade: document.getElementById('cadastroIdade').value,
        email: document.getElementById('cadastroEmail').value,
    }


    if (cadastro.email == "" || cadastro.email.indexOf('@') == -1 || cadastro.email.indexOf('.') == -1) {
        alert('Preencha o Email corretamente!');

        // DESAFIO 2 

    } else {


        const container = document.getElementById("listaCriada")
        container.innerHTML += "<div>" + "<p>" + cadastro.nome + "</p>" + "<p>" + cadastro.idade + "</p>" + "<p>" + cadastro.email + "</p>" + "</div>"

        alert('Cadastro Feito com sucesso.') //DESAFIO 1

        document.getElementById("cadastroNome").value = ""
        document.getElementById("cadastroIdade").value = ""
        document.getElementById("cadastroEmail").value = ""
    }

}