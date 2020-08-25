/*4) Em cidades menores, o alistamento para o exército
acontece esporadicamente ao longo dos anos. Criar um
programa no qual que pergunte ao usuário se houve
alistamento dos anos 2000 a 2009, uma pergunta para
cada ano. Se houve alistamento deve ser digitado “S” e se
não houve alistamento “N”. Após digitar tudo, deve-se
mostrar na tela o último ano que houve alistamento. Caso
não tenha ocorrido alistamento, mostrar “Não houve
alistamento nos últimos 10 anos”. (Usar push, lastIndexOf)*/

var anos = []


for (let i=2000; i <= 2009; i++){

    anos.push(prompt(`Houve alistamento no ano ${i}, 'S' ou 'N'?`));
    var indice = anos
    var resultado = indice.lastIndexOf('S');   

};

    if(resultado != -1){

        alert(`O último que houve alistamento é 200${resultado}.`);  

    }else{

        alert(`Não houve alistamento nos últimos 10 anos.`);

    }

    

