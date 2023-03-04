class Pessoa {
    constructor(name, surname, id){
        this.name = name;
        this.surname = surname;
        this.id = id;
        console.log(this)
    }
}

const p1 = new Pessoa('Alexandre', 'Zenas', 20);
const p2 = new Pessoa('Salatiel', 'Ribeiro');
const p3 = new Pessoa('Mateus', 'Alves');
// console.log(Pessoa)