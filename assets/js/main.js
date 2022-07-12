let eleccionProducto = NaN;


do {
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