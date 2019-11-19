function addEvento() {
    const dia = document.getElementById('diaSemana').value;
    const tarefa = document.getElementById('evento').value;

    switch (dia) {
        case "segunda":
            const container = document.getElementById("segunda")
            container.innerHTML += "<p>" + tarefa + "</p>"
            break;


    }

    switch (dia) {
        case "terca":
            const container = document.getElementById("terca")
            container.innerHTML += "<p>" + tarefa + "</p>"
            break;


    }

    switch (dia) {
        case "quarta":
            const container = document.getElementById("quarta")
            container.innerHTML += "<p>" + tarefa + "</p>"
            break;


    }

    switch (dia) {
        case "quinta":
            const container = document.getElementById("quinta")
            container.innerHTML += "<p>" + tarefa + "</p>"
            break;


    }

    switch (dia) {
        case "sexta":
            const container = document.getElementById("sexta")
            container.innerHTML += "<p>" + tarefa + "</p>"
            break;


    }

    switch (dia) {
        case "sabado":
            const container = document.getElementById("sabado")
            container.innerHTML += "<p>" + tarefa + "</p>"
            break;


    }

    switch (dia) {
        case "domingo":
            const container = document.getElementById("domingo")
            container.innerHTML += "<p>" + tarefa + "</p>"
            break;


    }

    document.getElementById("evento").value = "";

    // Reseta o valor do input deixando
}