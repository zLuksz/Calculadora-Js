function soma(num1, num2) {
    resultado = (num1 + num2);
    document.getElementById('resultadocal').innerHTML = (num1 + ' + ' + num2 + ' = ' + resultado);
    return resultado;
}

function subtracao(num1, num2) {
    resultado = (num1 - num2);
    document.getElementById('resultadocal').innerHTML = (num1 + ' - ' + num2 + ' = ' + resultado);
}
function multiplicacao(num1, num2) {
    resultado = (num1 * num2);
    document.getElementById('resultadocal').innerHTML = (num1 + ' * ' + num2 + ' = ' + resultado);
}

function divisao(num1, num2) {
    if (num1 === 0 || num2 ===0 ) {
        document.getElementById('resultadocal').innerHTML = ('Não Há Divisão Por 0');
    } else {
        resultado = (num1 / num2);
        document.getElementById('resultadocal').innerHTML = (num1 + ' / ' + num2 + ' = ' + resultado);
    }
}


function calculadora() {
    let num1 = parseInt(document.getElementById('num1').value);
    let operador = document.getElementById('op').value;
    let num2 = parseInt(document.getElementById('num2').value);

    switch (operador) {
        case ('+') :
            soma(num1, num2);
            break;
        case ('-'):
            subtracao(num1, num2);
            break;
        case ('*'):
            multiplicacao(num1, num2);
            break;
        case ('/'):
            divisao(num1, num2);
            break;
        default:
            document.getElementById('resultadocal').innerHTML = ('Nenhuma Conta Realizada!!!');
    }
}