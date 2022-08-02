
let productos = [
    {
        id: 1,
        nombre: "Latte",
        precio: 400,
        imagen: "../assets/img/cafeconleche.jpg",
    },
    {
        id: 2,
        nombre: "Americano",
        precio: 370,
        imagen: "../assets/img/cafenegro.jpg",

    },
    {
        id: 3,
        nombre: "Mocca Latte",
        precio: 450,
        imagen: "../assets/img/cafeconchocolate.jpg",

    }


];

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
             <div class= "product-details" > Subtotal: $ ${
                 producto.precio ^ producto.cantidad
            }</div>
             <button class="btn btn-info"  id="remove-product"  onClick="removeProduct(${indice})">Eliminar Producto</button>
             `;
             miCarrito.appendChild(carritoContainer);
        });
        
     const totalContainer = document.createElement("div");  
     totalContainer.className = "total-carrito";
     totalContainer.innerHTML = `<div class= "total"> TOTAL$ ${total}</div>
     <button class= "btn btn-info  finalizar" id="finalizar" onClick="finalizarCompra()">FINALIZAR COMPRA</button>`;
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
    const compraFinalizada = `<div class= "compra-finalizada" ><p class="compra-parrafo> YA CASI ES TUYA LA COMPRA, EL ${total} </p></div>
    <div class= "datos-cliente">
    <p class= "datos-parrafo"> complete le formulario con sus datos para cordinar la entrega</p>
    <button class= "btn btn-info formulario" id="formulario" onClick="dibujarFormu()">FORMULARIO</button>
    </div>`;
    miCarrito.innerHTML = compraFinalizada;
};

const actualizarStorage =(cart)=>{
    localStorage.setItem("cart", JSON.stringify(cart))
}



/*do {
    eleccionProducto = parseInt(prompt("Elige el cafe que quiere llevar: \n1. Cafe Con Leche \n2. Cafe Negro \n3. Cafe Con Chocolate \n\n0. Salir del menú \nDEBES INGRESAR UN NUMERO."));

    switch(eleccionProducto) {
        case 1: case 2: case 3:
            product(eleccionProducto);
            break;
        case 0:
            alert("Saliste exitosamente.");
            break;
        default:
            alert("Ingresa una opción valida.");
            continue;
    }
} while (eleccionProducto > 3 || isNaN(eleccionProducto) || eleccionProducto < 0);

function product(id) {
    let precioProducto;
    let opcionProducto;

   
    if(id == 1) { opcionProducto = "Cafe Con Leche"; }
    else if (id == 2) { opcionProducto = "Cafe Negro"; }
    else if(id == 3) { opcionProducto = "Cafe Con Chocolate"; }
    else { alert("ERROR: Ocurrió un error inesperado con tu selección."); }
    

    
   precioProducto = parseFloat(prompt("Ingresa el costo del  " + opcionProducto));

    
    if(isNaN(precioProducto) || precioProducto <= 0) {
        alert("ERROR: Ingresa un número. Debe ser mayor a 0")
        product(id);
    } else {
        alert("Tu Monto a Pagar Son: $" + precioProducto);
    }
}
//Arrancan los eventos, sirven en el comprar de las tarjetas.
let button = document.getElementById("compra");
button.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("Primer respuesta");
    alert("Seleccionaste la compra de cafe con leche.")

let button2 = document.getElementById("negro");
button2.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("Segunda respuesta");
    alert("Seleccionaste la compra de cafe negro.")

let button3 = document.getElementById("chocolate");
button3.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("Tercer respuesta");
    alert("Seleccionaste la compra de cafe con chocolate.")
}
}
}
//Usando dom y sus clases
let navbar = document.getElementsByClassName("navbar");
console.log(navbar[0].innerHTML);
console.log(navbar[1].innerHTML);
console.log(navbar[2].innerHTML);
console.log(navbar[3].innerHTML);

//Utilizando local storage y guardando datos.
localStorage.setItem("Bienvenidos", "En Blucafe, queremos que tengas la mejor experiencia.");

let mensaje_local = localStorage.getItem("Bienvenidos");
console.log(mensaje_local);

//session storage: guardar datos
sessionStorage.setItem("Acerca de nosotros", "En Blucafe, queremos que tengas la mejor experiencia.");
*/
