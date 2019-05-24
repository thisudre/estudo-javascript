var pacientes = document.querySelectorAll('.paciente')

for (i=0; i<pacientes.length; i++)
{
    var paciente = pacientes[i]
    var altura = paciente.querySelector('.info-altura').textContent;
    var peso = paciente.querySelector('.info-peso').textContent;
    var tdImc = paciente.querySelector('.info-imc')
    
    if(!validaAltura(altura))
    {
        console.log('altura invalida')
        tdImc.textContent = 'Altura Inválida'
        paciente.classList.add('.paciente-invalido');
    }
    else if(!validaPeso(peso))
    {
        console.log('peso invalido')
        tdImc.textContent = 'Peso Inválido'
        paciente.classList.add('paciente-invalido');
    }
    else
    {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

function calculaImc(peso, altura)
{
    var imc = peso/altura**2
    return imc.toFixed(2)
}

function validaPeso(peso)
{
    if(peso < 0 || peso > 1000)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function validaAltura(altura)
{
    if(altura < 0 || altura > 3.0)
    {
        return false;
    }
    else
    {
        return true;
    }
}