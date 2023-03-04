//Serve pra filtrar os elementos do Array, sem necessariamente alterá-lo

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// for(let i = 0; i < numeros.length ; i++){
//     if(numeros[i] > 10){
//         console.log(numeros[i])
//     }
// }

//propriedade filter reduzida
const numerosFiltrados = numeros.filter(valor => valor > 10);

// Propriedade do filter completa
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor); // > retorna os valores do elemento
//     console.log(indice); //-> retorna os indice/index, a posição 
//     console.log(array); //-> retorna o Array inteiro
//     return valor > 10
// });

//filtrando um array de objetos
 const pessoas = [
    {nome:'Alexandre', idade: 20},
    {nome:'Salatiel', idade: 23},
    {nome:'Albanisio', idade: 55},
    {nome:'Edilane', idade: 49},
    {nome:'Nathalia', idade: 23},
 ];
 const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 8);
 const pessoasComMaisDe50Anos = pessoas.filter((obj) => { return obj.idade >= 50});
 const nomeQueTerminaComA = pessoas.filter((obj) => { return obj.nome.toLowerCase().endsWith('e');});
 console.log(pessoasComNomeGrande);
 console.log(pessoasComMaisDe50Anos);
 console.log(nomeQueTerminaComA);
