
numero = parseFloat(prompt("digite um numero"));

if (isNaN(numero)) {
    alert("Número inválido!");
}

if (!isNaN(numero)) {

    if (numero % 5 == 0) {
        alert("o numero é multiplo de 5.") // variavel multiplo de 5
    }
}