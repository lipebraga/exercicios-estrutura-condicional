const numUm = parseInt(prompt("insira um numero"));

if(isNaN(numUm)){
    // verifica se a conversao resultou em um numero valido
    alert('erro: voce nao digitou um numero valido');
}

if(isNaN(numUm)){
    // somente solicita o segundo numero se o primeiro for valido
    const numDois = parseInt(prompt("insira um numero"));
}

if(!isNaN(numDois)){
    //verifica se a conversão resultou em um numero valido
    alert('erro: voce nao digitou um numero valido');
}

if(!isNaN(numUm) && !isNaN(numDois)){
    if(numUm === numDois){
        alert("Os números são iguais!");

    }
    if(numUm!==numDois){
        alert("Os numero são diferentes");
    }
}
