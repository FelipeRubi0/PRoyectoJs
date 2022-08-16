
let productos = [];

fetch("./assets/js/productos.json")
.then((response) => response.json())
.then((data) =>{
cargarProductos (data);
});

const cargarProductos = (data) => {
    productos = data;
const contenedor = document.getElementById("container")
productos.forEach((producto,indice) => {
    let card = document.createElement("div")
    card.classList.add("card","col-sm-11","col-lg-5","col-xxl-4")
    card.innerHTML= `<img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body ">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">$ ${producto.precio}</p>
      <a href="#" class="btn btn-primary" onClick= "agregarAlcarrito(${indice})">Comprar</a>
    </div>`;
    contenedor.appendChild(card);
    });
};

let cart = [];

const agregarAlcarrito = (indiceDelArrayProducto) => {
    const indiceEncontradoCarrito = cart.findIndex((elemento) => {
        return elemento.id === productos[indiceDelArrayProducto].id;
    });
    
    if (indiceEncontradoCarrito === -1) {
   const productoAgregar = productos[indiceDelArrayProducto];
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

 let carritoContainer = document.getElementById ("cart");
 let total = 0;
 
 const dibujarCarrito = () => {
    carritoContainer.innerHTML= "";
     //miCarrito.className = "cart" ;
   if (cart.length > 0) {
      cart.forEach((producto, indice) => {
        total = total + producto.precio ^ producto.cantidad;
         let carrito = document.createElement("div");
         carrito.className = "producto-carrito";
         carrito.innerHTML = `
             <img class= "car-img" src="${producto.imagen}"/>
             <div class="product-details">
                 ${producto.nombre}
             </div>
             <div class= "product-details" > Cantidad: ${producto.cantidad}</div>
             <div class= "product-details" > Precio: $ ${producto.precio}</div>

             <button class="btn btn-info"  id="remove-product"  onClick="removeProduct(${indice})">Eliminar Producto</button>
             `;
             carritoContainer.appendChild(carrito);
        });
        
     const totalContainer = document.createElement("div");  
     totalContainer.className = "total-carrito";
     totalContainer.innerHTML = `<div class= "total"> TOTAL$ ${total}
     <button class= "btn btn-info  finalizar" id="finalizar" onClick="finalizarCompra()">FINALIZAR COMPRA</button> </div>`;
     carritoContainer.appendChild(totalContainer);

    }else{
        carritoContainer.innerHTML = `<h1 class="carrito__titulo"> No hay productos seleccionados, diríjase a la seccion productos </h1>`;
    }
  };

const removeProduct = (indice) => {
    cart.splice(indice, 1);
    actualizarStorage(cart);
    dibujarCarrito()
};

const actualizarStorage =(cart)=>{
    localStorage.setItem("cart", JSON.stringify(cart))
}
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    dibujarCarrito();
  }

const finalizarCompra = () => {
    const total = document.getElementsByClassName("total") [0]. innerHTML;
    carritoContainer.innerHTML = "";
    const compraFinalizada = `<div class= "compra-finalizada">
                                 <p class="compra-parrafo> YA CASI ES TUYA LA COMPRA, EL ${total} </p>
                            </div>
    <div class= "datos-cliente">
    <p class= "datos-parrafo"> complete le formulario con sus datos para cordinar la entrega</p>
    <button class= "btn btn-info formulario" id="formulario" onClick="dibujarFormu()">FORMULARIO</button>
    </div>`;
    carritoContainer.innerHTML = compraFinalizada;
};
const dibujarFormu = () => {
    carritoContainer.innerHTML = "";
    const formulario = `
    <h2> DATOS PARA EL ENVÍO </h2>
    <div class="contact__secction-container container-fluid">
     <div class="row">
       <div class="contact__secction__item">
         <label>Nombre</label>
         <input type="text" id="nombre" placeholder="Nombre"  />
       </div>
       <div class="contact__secction__item">
         <label>E-mail</label>
         <input type="text" id="mail" placeholder="E-mail" />
       </div>
       <div class="contact__secction__item">
         <label>Telefono</label>
         <input type="text" id="telefono" placeholder="Telefono"  />
       </div>
       <div class="contact__secction__item">
         <label>Domicilio</label>
         <input type="text" id="domicilio" placeholder="Domicilio" />
       </div>
       <div class="contact-button">
         <button type="button" class="btn btn-primary envio" onClick="mostrarMensaje()" >Confirmar</button>
       </div>
     </div>
   </div>`;
    carritoContainer.innerHTML = formulario;
  };
  const mostrarMensaje = () => {
    const nombreCliente = document.getElementById("nombre").value;
    const domicilioCliente = document.getElementById("domicilio").value;
    carritoContainer.innerHTML = "";
    let mensaje = `<div class="mensaje-final"> MUCHAS GRACIAS POR SU COMPRA!! </div>`;
    carritoContainer.innerHTML = mensaje;
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Gracias ${nombreCliente} por su compra! en 72 horas recibira su paquete en ${domicilioCliente}`,
      showConfirmButton: true,
      allowOutsideClick: false,
    });
  };
  





 