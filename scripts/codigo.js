// let nombre = "Jane";
// const nGrupo = "BTS";

// console.log ("Hola");
// console.log (nombre + " adora a " + nGrupo);

// //prompt - ingresa datos

// let usuario = prompt("Ingrese usuario");
// console.log ("Buenos dias " + usuario);

// let primNum = parseInt (prompt("Ingrese el primer numero"));
// let segNum = parseInt (prompt("Ingrese el segundo numero (distinto de 0)"));

// let resultado = primNum + segNum;
// alert("El resultado de la suma es = "+resultado);

//alert - salida de datos

//ejerc 1

let precioBruto = parseFloat(prompt("Ingrese el precio del producto"));
let Iva = precioBruto * 21 / 100;
let precioTotal = precioBruto + Iva;
alert ("El precio total es = "+precioTotal);
console.log ("El precio total es = "+precioTotal);

//ejerc 2

let yearBirth = parseInt (prompt ("Ingrese su year of birth"));
const actYear = 2022;
let age = actYear - yearBirth;
alert ("Usted tiene "+age+ " years.");
console.log ("Usted tiene "+age+ " years.");

