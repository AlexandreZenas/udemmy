//O map serve pra alterar elementos diretamento no Array original

//dobre os valores
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

//usando for
// for(let i = 0; i < numeros.length ; i++){
//      numeros[i] *= 2;
// }

//usando map
// const dobrando = numeros.map((item) => {return item * 2});
// console.log(dobrando);


//para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome" do objeto
//adicione uma chave id em cada objeto
// const pessoas = [
//     {nome:'Alexandre', idade: 20},
//     {nome:'Salatiel', idade: 23},
//     {nome:'Albanisio', idade: 55},
//     {nome:'Edilane', idade: 49},
//     {nome:'Nathalia', idade: 23},
//  ];

//  const names = pessoas.map((obj) => {return obj.nome});
//  const idade = pessoas.map((obj) => {delete obj.nome; return obj;});
//  const Id = pessoas.map((obj, indice) => {
//     obj.id = indice + 1 ;
//     return obj;
//  })
//  console.log(pessoas)

 var irmaosRibeiros =[
   {
        'nome':'Alexandre Zenas',
        'idade': '19 anos',
        'altura':'200cm',
    },

   {
        'nome':'Salatiel Ribeiro',
        'idade': '22 anos',
        'altura':'178cm',
    }
];

var sobre = [
    {
        'hobbiesDoAlexandre':'vôlei, música, bìblia'
    },
    {
        'hobbiesDoSalateil':'música, praia, surf'
    }

];
const x = irmaosRibeiros.map(obj => delete obj.nome)

console.log(irmaosRibeiros)