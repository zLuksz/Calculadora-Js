function calculadora() {
    let num1 = parseInt(document.getElementById('num1').value);
    let operador = document.getElementById('op').value;
    let num2 = parseInt(document.getElementById('num2').value);

    switch (operador) {
        case ('+') :
            resultado = (num1 + num2);
            document.getElementById('resultadocal').innerHTML = (num1 + ' + ' + num2 + ' = ' + resultado);
            break;
        case ('-'):
            resultado = (num1 - num2);
            document.getElementById('resultadocal').innerHTML = (num1 + ' - ' + num2 + ' = ' + resultado);
            break;
        case ('*'):
            resultado = (num1 * num2);
            document.getElementById('resultadocal').innerHTML = (num1 + ' * ' + num2 + ' = ' + resultado);
            break;
        case ('/'):
            if (num1 === 0 || num2 ===0 ) {
                document.getElementById('resultadocal').innerHTML = ('Não Há Divisão Por 0');
            } else {
                resultado = (num1 / num2);
                document.getElementById('resultadocal').innerHTML = (num1 + ' / ' + num2 + ' = ' + resultado);
            }
            break;
        default:
            document.getElementById('resultadocal').innerHTML = ('Nenhuma Conta Realizada!!!');
    }
}