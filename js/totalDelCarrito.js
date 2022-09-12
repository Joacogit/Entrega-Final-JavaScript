class EltotaldelCarrito {
    constructor() {
        this.carriTotal = []
        this.total = 0
    }
    agregaAlCarrito(producto){
        this.carriTotal.push(producto)
    
    }
    muestraCarrito(){
        return this.carriTotal
    }
}
const carro = new EltotaldelCarrito()

//___________________________________ Funcion SUMAR carrito ________________

const importeTotal = document.getElementById("total_compra")     // trae elemento por ID : 
let elTotal = document.createElement('div');
    elTotalParseado = parseInt(elTotal)    

function CambiarValorCarrito() {
    let carrito = carro.muestraCarrito() 
    let CompraTotal = carrito.reduce((acc, producto) => { return acc + producto.precio;}, 0)
    
    elTotal.innerHTML = `
    <th> <strong> EL TOTAL DE LA COMPRA ES: $ </strong></th>
    <th id="total"><strong>   ${CompraTotal} </strong></th>
    <hr>
    `    
    importeTotal.append(elTotal) 
}







const opcionesDeCuotas = [3,6,12,18];  // Array 

//      traer el total del carrito           
let totaldelCarrito = document.getElementById('total')
let resultado = 0;

function division (elTotalParseado,opcionesDeCuotas) {
    resultado = elTotalParseado / opcionesDeCuotas
    resultadoParseado = parseInt(resultado)

}
function mostrar (resultado){
    
}


//  vinculo de BOTON CALCULAR despues de seleccionar la cant de cuotas
const BOTONCALCULAR = document.getElementById('calcular').addEventListener('click', (e) => {
e.preventDefault()

//      eleccion de cant de cuotas del user con el select
let opcionesDeCuotas = document.getElementById("opcdecuotas");
let cantCuotasParseada = parseInt(opcionesDeCuotas.value);  



if (opcionesDeCuotas.includes(cantCuotasParseada)) {                    // si esto es verdadero, si se cumple

        division(elTotalParseado,opcionesDeCuotas);                           // llamada a la funcion a dividir
        mostrar(resultado);                                                 // llamada a la funcion a mostrar
        Swal.fire(("Su pago será de: $") + resultado + ("mensualmente."))    
    }
    else {
        Swal.fire('La opción ingresa no es correcta')
    }
    });







