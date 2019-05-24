var btnAdicionar = document.querySelector('#adicionar-paciente')

btnAdicionar.addEventListener('click', function(){
    event.preventDefault()

    var form = document.querySelector('#form-adiciona')
    var paciente = obterPacienteDoForm(form)
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector('#tabela-pacientes')
    var erros = validaPaciente(paciente)

    if(erros.length > 0)
    {
        exibeMensagensErro(erros)
        return
    }
    
    tabela.appendChild(pacienteTr)
    form.reset()

    var mensagensErro = document.querySelector('#mensagens-erro')
    mensagensErro.innerHTML = ''

})

function obterPacienteDoForm(form)
{
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, altura)
    }

    return paciente
}

function montaTd(dado, classe)
{
    var td = document.createElement('td')
    td.classList.add(classe)
    td.textContent = dado

    return td
}

function montaTr(paciente)
{
    var pacienteTr = document.createElement('tr')
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function validaPaciente(paciente)
{
    erros = []

    if(!validaAltura(paciente.altura))
    {
        erros.push("Altura inválida")
    }

    if(!validaPeso(paciente.peso))
    {
        erros.push("Peso inválido")
    }

    if(paciente.nome.length == 0)
    {
        erros.push("Nome não pode ser vazio")
    }

    if(paciente.peso.length == 0)
    {
        erros.push("Peso não pode ser vazio")
    }

    if(paciente.altura.length == 0)
    {
        erros.push("Altura não pode ser vazio")
    }

    if(paciente.gordura.length == 0)
    {
        erros.push("Gordura não pode ser vazio")
    }

    return erros;
}

function exibeMensagensErro(erros)
{
    var ulErros = document.querySelector('#mensagens-erro');
    ulErros.innerHTML = ""
    erros.forEach(function(erro)
    {
        console.log(erro)
        var liErro = document.createElement('li');
        liErro.textContent = erro;
        ulErros.appendChild(liErro)
    })
}