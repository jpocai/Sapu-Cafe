// class Cafe {
//     constructor (id, imagen, nombre, descripcion, precio){
//         this.id = id;
//         this.imagen = imagen;
//         this.nombre = nombre;
//         this.descripcion = descripcion;
//         this.precio = precio;
//     }
//     sumaIva (){
//         this.precio = this.precio * 1.21;
//     }
// }

function sumaIva (precio, iva){
    precio = precio;
    iva = 1.21;
    let precioConIva = precio * iva;
    return precioConIva;
}

let carrito = [];
if (localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}
const productos = [{

    id: 1,
    imagen: "https://github.com/jpocai/Sapu-Cafe/blob/Main/Images/Fotosproductos/Producto%201.png",
    nombre:"Café molido",
    descripcion: "Café molido 1kg",
    precio: 800.00},
{
    id: 2,
    imagen:"https://github.com/jpocai/Sapu-Cafe/blob/Main/Images/Fotosproductos/Producto%201.png",
    nombre:"Café tostado",
    descripcion: "Café en granos tostado 1kg",
    precio: 800.00},
{
    id: 3,
    imagen:"https://github.com/jpocai/Sapu-Cafe/blob/Main/Images/Fotosproductos/Producto%201.png",
    nombre:"Café torrado",
    descripcion: "Café en granos torrado 1kg",
    precio: 800.00},
{
    id: 4,
    imagen:"https://github.com/jpocai/Sapu-Cafe/blob/Main/Images/Fotosproductos/Producto%201.png",
    nombre:"Pack Café Molido",
    descripcion: "Pack Café Molido",
    precio: 800.00},
{
    id: 5,
    imagen:"https://github.com/jpocai/Sapu-Cafe/blob/Main/Images/Fotosproductos/Producto%201.png",
    nombre:"Sapu Edición Limitada",
    descripcion: "Sapu Edición Limitada",
    precio: 800.00},
{
    id: 6,
    imagen:"https://github.com/jpocai/Sapu-Cafe/blob/Main/Images/Fotosproductos/Producto%201.png",
    nombre:"Pack Café promo",
    descripcion: "Pack Café promo surtido",
    precio: 800.00},
]
let stock = document.getElementById("stock");

renderizar();

function renderizar() {
    for (const producto of productos) {
    stock.innerHTML += 
        `<li class="row list-group list-group-horizontal>"
        <h3> ID: ${producto.id} </h3>
        <img src= ${producto.imagen} width="250px" heigt="250px">
        <p> Producto: ${producto.descripcion} </p>
        <p> Producto: ${producto.precio} </p>
        <button class= "btn btn-primary" id="btn${producto.id}">Comprar</button>
        </li>`
    }
    productos.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener("click", function(){ agregarCarrito(producto)
        });
    })
}

//boton de finalizacion de compra.


function agregarCarrito(producto){
    carrito.push(producto);
    console.table(carrito);
    alert("Producto: " + producto.nombre + " agregado al carrito");

    localStorage.setItem("carrito", JSON.stringify(carrito));
}
// let botonMolido = document.getElementById("botonMolido");
// botonMolido.onclick = () => {
// alert("Agregaste un producto al carrito!");
// productos.push(molido);
// console.log(productos);
// }
// let botonTostado = document.getElementById("botonTostado");
// botonTostado.onclick = () => {
// alert("Agregaste un producto al carrito!");
// productos.push(tostado);
// console.log(productos);
// }
// let botonTorrado = document.getElementById("botonTorrado");
// botonTorrado.onclick = () => {
// alert("Agregaste un producto al carrito!");
// productos.push[torrado];
// console.log(productos);
// }
// let botonPackMolido = document.getElementById("botonPackMolido");
// botonPackMolido.onclick = () => {
// alert("Agregaste un producto al carrito!");
// productos.push[packMolido];
// console.log(productos);
// }
// let botonSapuLimit = document.getElementById("botonSapuLimit");
// botonSapuLimit.onclick = () => {
// alert("Agregaste un producto al carrito!");
// productos.push[sapuLimit];
// console.log(productos);
// }
// let botonPackPromo= document.getElementById("botonPackPromo");
// botonPackPromo.onclick = () => {
// alert("Agregaste un producto al carrito!");
// productos.push[packPromo];
// console.log(productos);
// }

// for (const Cafe of productos){
//     Cafe.sumaIva();
// } 

const stockCafe = ["torrado", " molido", " tostado"];
console.log("Tenemos en stock los siguientes tipos de cafe: " + stockCafe);
// console.log("En stock tenemos " + stockCafe.length + " articulos");

// let tipoBuscado = prompt ("Ingrese el tipo de café que desea buscar\nNuestros estilos de cafe son:\n- Torrado.\n- Molido.\n- Tostado.");
// for (const Cafe of productos){
//     if(Cafe.tipo == tipoBuscado){
//         console.log(Cafe);
//     }
// }


// function calcularInteres (precioConIva, interes) {
//     // let precioConIva = precio * 1.21;
//     let int = (precioConIva * interes); 
//     return int;
// }
// function capturarEsc(e){
//     if(e.keycode==27 || e.which==27){
//         alert("presionaste la tecla Esc");
//     }
// }
// let precioConIva = sumaIva();
// let precioConInt = calcularInteres();
// // let precioFinal = calcularInteres();
// let cuotas = parseInt ( prompt ("Ingresa la cantidad de cuotas deseada.\n(3, 6, 9, 12, 18)\n(Presiona Esc para salir o presiona c para abonar de contado.)"));

// while ((cuotas != capturarEsc(27) || (cuotas === "c"))) {
//     switch (cuotas) {
//         case "3":
//             precioConIva = sumaIva(800, 1.21);
//             interes = 1.15;
//             console.log ("En 3 cuotas tenes un 15% de interes adicional. Total: $" + calcularInteres(precioConIva, interes));
//             break;
//         case "6":
//             precioConIva = sumaIva(800, 1.21);
//             interes = 1.30;
//             console.log ("En 6 cuotas tenes un 30% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
//             break;
//         case "9":
//             precioConIva = sumaIva(800, 1.21);
//             interes = 1.45;
//             console.log ("En 9 cuotas tenes un 45% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
//             break;
//         case "12":
//             precioConIva = sumaIva(800, 1.21);
//             interes = 1.60;
//             console.log ("En 12 cuotas tenes un 60% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
//             break;
//         case "18":
//             precioConIva = sumaIva(800, 1.21);
//             interes = 1.75;
//             console.log ("En 18 cuotas tenes un 75% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
//             break;
//         case "c":
//             precioConIva = sumaIva(800);
//             console.log ("Abonando de contado el total es: $" + precioConIva);
//             break;
//         default:
//             alert ("No ofrecemos esa cantidad de cuotas");
//             break;
//         }
//             cuotas = prompt ("Ingresa la cantidad de cuotas deseada.\n(3, 6, 9, 12, 18)\n(Presiona Esc para salir o presiona c para abonar de contado.)");
//     }


// let desc = precioConIva * 0.90;
// let promo = prompt ("Ingresá tu código promocional o presiona Esc para salir.");
// if ((promo === "sapucafe10") || (promo === "SAPUCAFE10")){
//     console.log("Felicidades, accediste a un decuento adicional de un 10%!");
//     console.log("El total a pagar es: " + desc);
// } else if (promo == capturarEsc(27)){
//     alert("No has ingresado ningún código. El precio total es de: $" + precioConIva);
// } else if ((promo !== "sapucafe10") || (promo !== "SAPUCAFE10")){
//     console.log("Lo siento, no pudimos validar ese código de descuento.");
// }


