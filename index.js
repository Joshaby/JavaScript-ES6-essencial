function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {

    }
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function() {
        console.log("Au au!");
    }
}

const cachorro = new Cachorro(false);

console.log(cachorro)
console.log(cachorro.__proto__ === Animal.prototype)
console.log(cachorro instanceof Animal)

