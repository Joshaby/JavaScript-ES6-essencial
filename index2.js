class Animal {

    qtdePatas;

    constructor(qtdePatas) {
        this.qtdePatas = qtdePatas
    }

    getQtdePatas() {
        return this.qtdePatas;
    }
    setQtdePatas(qtdePatas) {
        this.qtdePatas = qtdePatas;
    }

    movimentar() {

    }
}

class Cachorro extends Animal {

    static correr() {
        console.log("corre");
    }

    morde;

    constructor(morde) {
        super(4);
        this.morde = morde;
    }

    get morde() {
        return this.morde;
    }
    set morde(morde) {
        console.log("Oi!")
        this.morde = morde;
    }

    latir() {
        console.log("Au au!");
    }
}

const pug = new Cachorro(12);
Cachorro.correr()
pug.morde = 14
console.log(pug.morde)
console.log(pug)