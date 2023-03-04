//retorne todos os numeros pares
// filtrar pares
// dobrar os valores pares
// somar os valores
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

//forma normal
// const somaDosParesDobrados = numeros
// .filter((item) => {
//     return item % 2 === 0;  
// }).map((item) => {
//     return item * 2;
// }).reduce((acm, item) => {
//     return acm + item;
// }, 0)
// console.log(somaDosParesDobrados)


//forma reduzida
const somaDosParesDobrados = numeros
    .filter(item => item % 2 === 0)
    .map(item => item * 2)
    .reduce((acm, item) => acm + item)
console.log(somaDosParesDobrados)
/* 
    quando só tem um parametro dentro da função, não é necessário parenteses. ex: 
    .filter((item) => {}) -> .filter(item => {})
    quando só tem uma linha na função, podemos tirar as chaves '{}' 
    .filter(item => {return item * 2}) -> .filter(item => return item)
    e podemos tirar a palavra return quando for somente uma função, linha;
    .filter(item => return item) -> .filter(item => item)
*/