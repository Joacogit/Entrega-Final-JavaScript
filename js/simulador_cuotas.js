const APLIQUEDEPARED = {
    precio: 1000,
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
}
const CUADROCONLÁMPARA = {
    precio: 2000,
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
}
const CUADRODECOCONLUZ = {
    precio: 3000,
    materiales: "madera, luces a pilas",
    medidas: "30 x 20 x 30",
}
const VELADORDEPARED = {
    precio: 4000,
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
}
const CUADROCONESTANTE = {
    precio: 5000,
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
}
const LAMPARADECO = {
    precio: 6000,
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
}


let entradaProducto = prompt("Ingrese el producto:");

alert("CALCULE SU PAGO EN CUOTAS")

let entrada = prompt("Ingrese el monto a calcular:");                                       // solicitud 1                        
let entradaParseada = parseInt(entrada);                                         

let cantidadDeCuotas = prompt("Elija su pago en 3, 6, 12 o 18 cuotas sin interés");         // solicitud 2             
let cantCuotasParseada = parseInt(cantidadDeCuotas);   

let resultado = 0;


// ____________________________________________    Array    ________________________________________________________
const opcionesDeCuotas = [2,3,6,8,10,12,18];
console.log(opcionesDeCuotas);

opcionesDeCuotas.shift('quitar op.2 cuotas');           // DPS DEL SHIFT EL ARRAY QUEDÓ MODIFICADO
opcionesDeCuotas.splice(2,2);                           // quitar op.8 y 10 cuotas

console.log('Join =', opcionesDeCuotas.join(' | '));

// Declaración de funciones__________________________________________________________________________________________

function division(entrada, cantidadDeCuotas) {      // Función que divide dos números y asigna a resultado
    resultado = entrada / cantidadDeCuotas
}

function mostrar(mensaje) {                         // Función para muestra de resultado
    alert("Su pago será de $" + mensaje + " mensualmente.")
}

//____________________________________________________________________________________



if (opcionesDeCuotas.includes(cantCuotasParseada)) {  // ←- si eso es verdadero, si se cumple

    division(entrada, cantCuotasParseada);            // llamada a la funcion a dividir
    mostrar(resultado);                               // llamada a la funcion a mostrar
}

else {
    alert("La opción ingresada no es correcta")       // ←- si da falso, si no cumple con las opciones q dispone el array
}


// en el ternario la primera opcion es si el resultado es True : y la otra es False
// OpcdeCuota == (3 || 6 || 12 || 18) ? console.log("Opcion: 3/6/12/18") : console.log("La opción elegida no es válida");
