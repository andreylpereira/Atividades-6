/*1) Programe um pequeno sistema onde o usuário digite 10
números (um de cada vez) e os mostre de forma ordenada,
crescente. (Utilizar push, sort)*/

let numeros = []


for (i=1; i <= 10; i++){

    numeros.push(Number(prompt(`Digite um número:`)));
    numeros.sort(function(a, b) {
        return a - b;
      });
      
}

alert(numeros);