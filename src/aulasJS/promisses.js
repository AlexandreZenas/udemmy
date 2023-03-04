function rand(min, max){
    //multiplica os parametros recebidos em 1000
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)//retorna um número aleatório
} 
   function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        /*new promise recebe os parametros resolve e reject. Resolve faz uma verificação de ordem, disparando os comandos em sequência, reject finaliza a sequencia no comando que não cumpriu os requisitos da verificação*/
        if( typeof msg !== 'string')reject('ERROR')
        setTimeout(() => {
            resolve(msg);//smp que a gente chamar o resolve, o método then será executado
        }, tempo);/* Esta é a função que dispara os comandos, resolve ira disparar a msg após o tempo aleatorio*/
    });
   }
   esperaAi('frase que será chamada no primeiro then', rand(1, 3))// -> passa os parâmetros pra função 'esperaAi'
   .then(resposta => {
    console.log(resposta)
    return esperaAi('o proximo then retornará essa frase', rand(1, 3));
   })
   .then(resposta => {
    console.log(resposta)
    return esperaAi(2, rand(1, 2));
   })
   .then(r => {
    console.log(r)
   })
   .catch(erro => {
    console.log(erro)
   })