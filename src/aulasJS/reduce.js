// serve pra reduzir o elemento do Array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce((acumulador, item, indice, array) => {
//     acumulador = acumulador + item;
//     console.log(acumulador, item);
//     return acumulador;
// }, 0);


//retorne a pessoa mais velha
const pessoas = [
    {nome:'Alexandre', idade: 20},
    {nome:'Salatiel', idade: 23},
    {nome:'Albanisio', idade: 55},
    {nome:'Edilane', idade: 49},
    {nome:'Nathalia', idade: 23},
 ];

 const maisVelho = pessoas.reduce((acumulador, item) => {
    if(acumulador.idade > item.idade) return acumulador;
    console.log(acumulador)
    return item;
 }); 
//  console.log(maisVelho);