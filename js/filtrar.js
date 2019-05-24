var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente")

    if (campoFiltro.value.length > 0)
    {
        pacientes.forEach(function(paciente)
        {
            var nome = paciente.querySelector(".info-nome").textContent
            expressao = new RegExp(campoFiltro.value, "i")
            if (!expressao.test(nome))
            {
                paciente.classList.add("invisible")
            }
            else
            {
                paciente.classList.remove("invisible");
            }
        })
    }
    else
    {
        pacientes.forEach(function(paciente)
        {
            paciente.classList.remove("invisible");
        })
    }
})