/*5) Fazer um programa no qual o usuário deve digitar as
três cores primárias (amarelo, vermelho, azul) e armazenar
em um vetor. Solicitar três vezes “Digite uma cor primária:
”. Em seguida deve digitar as três cores secundárias
(laranja, verde, violeta) e armazenar em outro vetor.
Solicitar três vezes “Digite uma cor secundária: ”. Um novo
vetor deve ser criado com cores primárias + secundárias
(amarelo, vermelho, azul, laranja, verde, violeta). No início
dessa lista deve-se adicionar preto e no final branco.
Perguntar “Adicionar no início da lista: ” e “Adicionar ao
final da lista: ”. Mostrar na tela a sequência completa,
incluindo preto e branco. (Utilizar push, unshift e concat).*/

var primarias = ["amarelo", "vermelho", "azul"]
var secundarias = ["laranja", "verde", "violeta"]

    for (let i=1; i <= 3; i++) {

        let inputPrimarias = prompt(`Digite a cor primária nº${i}:`)
        let inputSecundarias = prompt(`Digite a cor secundária nº${i}:`)


        if ([inputPrimarias] == [primarias] && [inputSecundarias] == [secundarias]){

            var armazenar = Array.prototype.push.apply(primarias, secundarias);
            armazenar.unshift("preto")
            armazenar.concat("branco")
            alert(armazenar);
            
        } else {

            alert("Tente outra vez!")

        }

    }
