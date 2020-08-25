/*3) Faça um programa que solicite ao usuário digitar 5
números e mostre a soma da multiplicação dos números
pelo maior número digitado. Exemplo: pegar os 4 números
digitados que não são o maior e multiplicá-los
individualmente pelo maior. Mostrar a soma das
multiplicações. (Utilizar push, sort)*/

let numeros = []
var resultado = []

for (i=1; i <= 5; i++){

    numeros.push(Number(prompt(`Digite um número:`)));
    var ordenados = numeros.sort(function(a, b) {
        return a - b;
      });

      resultado = (ordenados[0] + ordenados[1] + ordenados[2] + ordenados[3]) * (ordenados[4]);

}

alert(resultado);

