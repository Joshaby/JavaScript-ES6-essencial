function Animal() {

}
 
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {

}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log("Au au!");
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);