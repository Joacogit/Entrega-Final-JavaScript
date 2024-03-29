//______________________

Toastify({
    text: "¡No te olvides de seguirnos en las redes!",
    duration: 5000,
    gravity: 'bottom',
    position: 'center'
}).showToast();





const dom_producto = document.getElementById("cards_productos");       
const dom_carrito = document.getElementById("tabla")                
for (const elemento of lista_productos) {                           
    
    const div = document.createElement("div"); 
    div.classList.add("col-lg-4", "col-md-6", "col-sm-12");

    div.innerHTML = `
    <div class="card h-100">
        <img src="../images/${elemento.imagen}" alt="imagenes">
        <div class="card-body d-flex flex-column justify-content-between">
        <h5>${elemento.nombre}</h5>
        <p class="card-text">${elemento.descripcion}</p>
        <p class="card-text text-success">$${elemento.precio}</p>
        
        <a href="galeria.html" id="ver_mas" class="card-link btn btn-primary">VER MAS</a>
        <hr>
        <!-- <a href="#" id="${elemento.id}" class="btn btn-primary mi_evento">Agregar al Carrito!</a>  -->
        </div>
    </div>

    `
    dom_producto.append(div) 
}

// _______________ EVENTO BOTONES DE AGREGAR AL CARRITO _______________________________________________________________

// const evento_boton_agregar = document.getElementsByClassName("mi_evento")      descomentar



for (const elemento of evento_boton_agregar) {
    elemento.addEventListener("click", (event) => {                         
        event.preventDefault()                                              
        console.log(event.target.id)                                        
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            imageUrl: "/images/logo_qr_tarjeta.jpg",
            title: 'Producto agregado!',
            showConfirmButton: false,
            timer: 1000
        })

        let producto = lista_productos.find(item => item.id === parseInt(event.target.id))
        const tr = document.createElement('tr'); 
         
        
        tr.innerHTML =`
            
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$ ${producto.precio}</td> 
            <td>
                <button id="btndelete" 

                data-id="<?php echo $f['id']; ?>"  
                data-toggle="modal" data-target="modalEliminar">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                
                <i class="bi bi-trash"></i>
                
                </button>
            <hr>
            `
            

        carro.agregaAlCarrito(producto) 
        CambiarValorCarrito()
        dom_carrito.append(tr)     
    })
    
}



function eliminar (){
    const BOTONBORRARELEMENTO = document.getElementById("btndelete");
    BOTONBORRARELEMENTO.addEventListener("click", (event) => {
        e.preventDefault()            
        event.target.parentNode.remove()
    
        
    
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            }
        })
    })
}




// FORMULARIO CALCULAR 

//_______________________________FUNCION SELECT CON FETCH_________________________________________________________
const cargarOpdeCuotas = async () => {
    const response = await fetch('./archivos_json/cuotas.json');  // await para q espere a LA RESPUESTA
    const data = await response.json();           
    //data son las op de cuotas - map dev un array

    //al select del html cargar opciones 
    const select = document.getElementById("opcdecuotas");
    select.innerHTML = data.map((opcdecuotas) => `
        <option value= "${opcdecuotas.id}">${opcdecuotas.numero}</option> `
        );
}                           //map: dev un array 
cargarOpdeCuotas();


//________________________________________________________________________________________________
const BTN = document.getElementById('btn').addEventListener('click', () => {
    Swal.fire({
        imageUrl: '/images/logoblanco.jpeg',
        title: 'Listo!',
        text: 'Tu compra se ha realizado con éxito',
        confirmButtonText: 'Ok',
        icon: 'success',
        })
    });
    







