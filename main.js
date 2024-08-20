const form = document.getElementById('form-AB')

function validaValores(valorA, valorB){
    return valorA < valorB;  
}

form.addEventListener('submit', function(e)
{
    e.preventDefault();
    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');
    const mensagemSucesso = `O número ${numeroB.value} é MAIOR do que o número ${numeroA.value}`;
    const mensagemInsucesso = `O número ${numeroB.value} é MENOR do que o número ${numeroA.value}`;

    if (validaValores(numeroA.value, numeroB.value)){
        alert(mensagemSucesso);        
    }
    else{
        alert(mensagemInsucesso); 
    }    
    numeroA.value = ''
    numeroB.value = ''       
})


