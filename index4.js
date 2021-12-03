const a = [1, 2, 3, 4, 5, [4, [5, 7, [9, 10]]]];

const b = new Array(1, 2, 3, 5, 6);

const c = Array.of({
        nome: 'José',
        sobrenome: 'Henrique'
    }, 2, 3);
    
console.log('1', a, b, c);
let newSize = a.push(6);
console.log('2', a, newSize);

let lastElement = a.pop();
console.log('3', a, lastElement);

newSize = a.unshift(0);
console.log('4', a, newSize);

let firstElement = a.shift();
console.log('5', a, firstElement)

const d = a.concat(b);

console.log('6', d);
console.log(d.slice(-2));
console.log(d.slice(2));
console.log(d.slice(0, 2));

const e = new Array(1, 2, 3, [], (e) => {console.log(e)}, {}, 5);
console.log('7', e);
e.splice('8', 5);
console.log('9', e);
e.splice(0, 1, 'Oi');
console.log('10', e);

console.log('11');
d.forEach((value, index) => {
    console.log(`Valor: ${value} - Index: ${index}`);
});

console.log('12');
const f = d.map((value, index) => {
    if (value == 1) {
        return `${value}, ${index}`;
    }
    else {
        return [String (value)];
    }
});
console.log(f);

const g = a.flat(3);
console.log('13', g);

console.log('14', a.flatMap(value => value + 2));

const interator = b.keys();
console.log('15');
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());

const values = b.values();
console.log('16');
console.log(values.next());
console.log(values.next());
console.log(values.next());

const entries = b.entries();
console.log('17');
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());

const find = b.find(value => value >= 2);
console.log('18', find);

console.log('19', b.findIndex(index => index > 3));

console.log('20', b.filter(value => value > 2));

console.log('21', b.indexOf(1));

console.log('22', b.includes(1));

console.log('23', b.some(value => value >= 2));

console.log('24', b.reduce((sum, value) => {
    return sum += value;
}, 0));

console.log('25', b.reduce((sum, value) => sum += value, 0));

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatValues = data.reduce((total, value) => {
    return total.concat(value);
}, []);
console.log('26', flatValues);

console.log('27', b.every(value => value > -1));

console.log('28', b.sort((current, next) => {
    return current - next;
}));

console.log('29', b.sort((current, next) => (current - next) * -1));

console.log('30', b.reverse());

console.log('31', b.join('-'));

const obj = {
        nome: 'José',
        sobrenome: 'Henrique',
        idade: 20
    };

const objToArray = obj => Object.keys(obj).reduce((acum, key) => {
    return [
        ...acum,
        {key, value: obj[key]}
    ];
}, [])

console.log('32', objToArray(obj));

const array = [{id: 1, nome: 'José', sobrenome: 'Henrique', idade: 20}, 
    {id: 1, nome: 'Brito', sobrenome: 'Henrique', idade: 21}];

const arrayToObj = array => array.reduce((acum, value) => {
    const {id, ...attrs} = value;
    return {
        ...acum, [id]: attrs,
    };
}, {});

console.log('33', arrayToObj(array));

const {nome, ...spread} = obj;
console.log('34', nome)
console.log(spread);

const func = (x, y, z) => x + y + z;
const arr = [1, 2, 3];
console.log('35', func(...arr));