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





//      traer el total del carrito           
let totaldelCarrito = document.getElementById('total')

//      eleccion de cant de cuotas del user con el select
let cantidadDeCuotas = document.querySelector("opcdecuotas")
let cantCuotasParseada = parseInt(cantidadDeCuotas)   

let resultado = 0;

const opcionesDeCuotas = [3,6,12,18];  // Array 

function division (totaldelCarrito,cantidadDeCuotas) {
    resultado = totaldelCarrito / cantidadDeCuotas
}


if (opcionesDeCuotas.includes(cantCuotasParseada)) {  // ←- si eso es verdadero, si se cumple

    division(entrada, cantCuotasParseada);            // llamada a la funcion a dividir
    mostrar(resultado);                               // llamada a la funcion a mostrar
    
}
else {
    Swal.fire('La opción ingresada no es correcta')      // ←- si da falso, si no cumple con las opciones q dispone el array
}

//  vinculo de BOTON CALCULAR despues de seleccionar la cant de cuotas

const BOTONCALCULAR = document.getElementById('calcular').addEventListener('click', () => {
    
    function mostrar(mensaje) {                         // Función para muestra de resultado
    Swal.fire("Su pago será de $" + mensaje + " mensualmente.")
    }
    
    });



