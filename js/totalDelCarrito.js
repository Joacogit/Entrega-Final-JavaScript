//_________________  SUMA DE PRODUCTOS ________________

class EltotaldelCarrito {
    constructor() {
        this.carriTotal = []
        this.total = 0
    }
    agregaAlCarrito(producto){
        this.carriTotal.push(producto)
        console.log(this.carriTotal)
    }
    muestraCarrito(){
        return this.carriTotal
    }
}

const carro = new EltotaldelCarrito()


//_______________ Funcion SUMAR carrito ________________

const importeTotal = document.getElementById("total_compra")
let suma = document.createElement('div');    

function CambiarValorCarrito() {
    let carrito = carro.muestraCarrito() 
    console.log(carrito);
    let CompraTotal = carrito.reduce((acc, producto) => { return acc + producto.precio;}, 0)
    console.log(CompraTotal)

    suma.innerHTML = `
    <th> <strong> EL TOTAL DE LA COMPRA ES: </strong></th>
    <th id="total"><strong> $${CompraTotal} </strong></th>
    `    
    importeTotal.append(suma) 
}










