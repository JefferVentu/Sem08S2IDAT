// NUMBERS

//const numberOne = 10;
//const numberTwo = 30;
//const numberThree = 10.5;
//const numberFour = -300.24;

//let result;


// Realizo la compra de 3 productos
// Se me va aplicar un descuento del 30% venta total
// Manda a la consola, el resultado total (sin el descuento y con el descuento)

const numberOne = 345;
const numberTwo = 525;
const numberThree = 975;

let plus;
let discount;

plus = numberOne + numberTwo + numberThree;
discount = plus*0.3;

// amountTotal
// amountTotalWithDiscount

//console.log('El monto total es ',plus);
//console.log ('El monto total con descuento es ',discount);

//console.log(numberOne);
//console.log(numberTwo);
//console.log(numberThree);
//console.log(numberFour);

// MATH

result = Math.PI;
console.log(result);

// round es rendodeo humano
result = Math.round(2.4);
console.log(result);

result = Math.round(2.456);
console.log(result);

// redondeo a favor de nosotros
result = Math.floor(2.9);
console.log(result);

result = Math.ceil(2.1);
console.log(result);

result = Math.random();
// Hacer al numero entero
console.log(Number.parseInt(result*10));