const APLIQUE = {
    precio: 1000,
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
}
const CUADRO_LAMPARA = {
    precio: 2000,
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
}
const CUADRO_LUZ = {
    precio: 3000,
    materiales: "madera, luces a pilas",
    medidas: "30 x 20 x 30",
}
const VELADOR = {
    precio: 4000,
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
}
const CUADRO_ESTANTE = {
    precio: 5000,
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
}
const LAMPARA = {
    precio: 6000,
    materiales: "madera, electricidad",
    medidas: "30 x 20 x 30"
}

const listaProductos = [];                                                       //Array vacio

let entradaProducto;                                                             //dec var entradaprod
do {
    entradaProducto = prompt("Ingrese un producto, ingrese FIN para terminar:"); // introducir producto
    if (entradaProducto != "FIN")   {                                            // si es dintinto de FIN            
        listaProductos.push(entradaProducto);                                    // introduce elemento al array con push al final            
    }
} while (entradaProducto != "FIN");                                              // mientras entrada sea dist a FIN, vuelve a preguntar

alert("Productos seleccionados: " + listaProductos.length + " productos." );     // imprime msj con cantidad de elementos
alert("Productos seleccionados: \n" + listaProductos.join("\n"));                // imprime con saltos de linea

//________________________________________________________________________________________________________________________________


alert("CALCULE SU PAGO EN CUOTAS")

let entrada = prompt("Ingrese el valor del producto seleccionado para calcular:");           // solicitud 1                        
let entradaParseada = parseInt(entrada);                                         

let cantidadDeCuotas = prompt("Elija su pago en 3, 6, 12 o 18 cuotas sin interés:");         // solicitud 2             
let cantCuotasParseada = parseInt(cantidadDeCuotas);   

let resultado = 0;

// ___________________________________________________________    Array    _______________________________________________________
const opcionesDeCuotas = [2,3,6,8,10,12,18];
console.log(opcionesDeCuotas);

opcionesDeCuotas.shift('quitar op.2 cuotas');           // DPS DEL SHIFT EL ARRAY QUEDÓ MODIFICADO
opcionesDeCuotas.splice(2,2);                           // quitar op.8 y 10 cuotas

console.log('Join =', opcionesDeCuotas.join(' | '));

// Declaración de funciones__________________________________________________________________________________________

function division(entrada, cantidadDeCuotas) {          // Función que divide dos números y asigna a resultado
    resultado = entrada / cantidadDeCuotas
}

function mostrar(mensaje) {                            // Función para muestra de resultado
    alert("Su pago será de $" + mensaje + " mensualmente.")
}
// _____________ Fin declaración de funciones ___________________________________________________________________________________


if (opcionesDeCuotas.includes(cantCuotasParseada)) {  //'opcdecuotas' incluye 'cantdecuotasparseadas' q puso el usuario?
//                   ↳    si eso es verdadero, si se cumple  ↴
   
    division(entrada, cantCuotasParseada);            // llamada a la funcion a dividir
    mostrar(resultado);                               // llamada a la funcion a mostrar
}

else {
    alert("La opción ingresada no es correcta")       // ←- si da falso, si no cumple con las opciones q dispone el array
}

//___________________ INTERACCION CON HTML ______________________________________

let titulo = document.getElementById("productos")
// cambio el código HTML 
productos.innerText = "SECCION PRODUCTOS"
//________________________________________________ INNER TEXT
let parrafo = document.getElementById("lorem")
lorem.innerText = "LUCÍMADERA ES UNA EMPRESA FAMILIAR DEDICADA A LA ELABORACIÓN DE PRODUCTOS DE ILUMINACIÓN Y DECORACIÓN PARA EL HOGAR."
//________________________________________________ INNER TEXT
let lista = document.getElementById("tercer_div")
tercer_div.innerHTML = `
        <h4> TIENDA DECO </h4>
        <p> LA MADERA QUE SIMBOLIZA EL CRECIMIENTO Y EL DESARROLLO VERTICAL SERÁ NUESTRA ALIADA EN CADA UNO DE NUESTROS PRODUCTOS. </p>
        </div>
        `
//________________________________________________ INNER HTML