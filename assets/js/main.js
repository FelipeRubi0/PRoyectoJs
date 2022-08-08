let productos = [];

fetch("./assets/js/productos.json")
.then((response) => response.json())
.then((data) =>{
cargarProductos (data);
});

const cargarProductos = (data) => {
    productos = data;
const contenedor= document.getElementById("container")
productos.forEach((producto,indice)=>{
    let card = document.createElement("div")
    card.classList.add("card","col-sm-11","col-lg-4")
    card.innerHTML= `<img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">$ ${producto.precio}</p>
      <a href="#" class="btn btn-primary" onClick= "agregarAlcarrito(${indice})">Comprar</a>
    </div>`;
    contenedor.appendChild(card);
    });
};

 let miCarrito = document.getElementById ("cart");
 let total = 0;
 const dibujarCarrito = () => {
     miCarrito.className = "cart" ;
     miCarrito.innerHTML= "";
    if (cart.length > 0) {
      cart.forEach((producto, indice) => {
        total = total + producto.precio ^ producto.cantidad;
         const carritoContainer = document.createElement("div");
         carritoContainer.className = "producto-carrito";
         carritoContainer.innerHTML = `
             <img class= "car-img" src="${producto.imagen}"/>
             <div class="product-details">
                 ${producto.nombre}
             </div>
             <div class= "product-details" > Cantidad: ${producto.cantidad}</div>
             <div class= "product-details" > Precio: $ ${producto.precio}</div>

             <button class="btn btn-info"  id="remove-product"  onClick="removeProduct(${indice})">Eliminar Producto</button>
             `;
             miCarrito.appendChild(carritoContainer);
        });
        
     const totalContainer = document.createElement("div");  
     totalContainer.className = "total-carrito";
     totalContainer.innerHTML = `<div class= "total"> TOTAL$ ${total}
     <button class= "btn btn-info  finalizar" id="finalizar" onClick="finalizarCompra()">FINALIZAR COMPRA</button> </div>`;
     miCarrito.appendChild(totalContainer);

    }else{
        miCarrito.classList.remove("cart");
    }

};


let cart= [];

const agregarAlcarrito = (indice) => {
    const indiceEncontradoCarrito = cart.findIndex((elemento) => {
        return elemento.id === productos[indice].id;
    });
    
    if (indiceEncontradoCarrito === -1) {
    const productoAgregar = productos[indice];
    productoAgregar.cantidad = 1;
    cart.push(productoAgregar);
    actualizarStorage(cart);
    dibujarCarrito();
    } else {
    cart[indiceEncontradoCarrito].cantidad += 1;
    actualizarStorage(cart);
    dibujarCarrito();
    }
};
const removeProduct = (indice) => {
    cart.splice(indice, 1);
    actualizarStorage(cart);
    dibujarCarrito()
}

const finalizarCompra = () => {
    const total = document.getElementsByClassName("total") [0].innerHTML;
    miCarrito.innerHTML = "";
    const compraFinalizada = `<div class= "compra-finalizada">
                                 <p class="compra-parrafo> YA CASI ES TUYA LA COMPRA, EL ${total} </p>
                            </div>
    <div class= "datos-cliente">
    <p class= "datos-parrafo"> complete le formulario con sus datos para cordinar la entrega</p>
    <button class= "btn btn-info formulario" id="formulario" onClick="dibujarFormu()">FORMULARIO</button>
    </div>`;
    miCarrito.innerHTML = compraFinalizada;
};

const actualizarStorage =(cart)=>{
    localStorage.setItem("cart", JSON.stringify(cart))
}



 