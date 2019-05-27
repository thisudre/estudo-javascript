var btnImportar = document.querySelector("#importar-paciente");

btnImportar.addEventListener("click", function(){
    console.log("Importando pacientes...")
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        var pacientes = JSON.parse(xhr.responseText)
        console.log(pacientes)
        console.log(typeof(pacientes))
        
        pacientes.forEach(function(paciente)
        {
            inserirPacienteNaTabela(paciente);
        })
    })
    
    xhr.send()
    
    
})