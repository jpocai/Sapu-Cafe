
class Cafe {
    constructor (tipo, precio, lote, vencimiento){
        this.tipo = tipo;
        this.precio = precio;
        this.lote = lote;
        this.vencimiento = vencimiento;
    }
    sumaIva (){
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos. push(new Cafe ("torrado", 800, 001, "120 dias",));
productos. push(new Cafe ("molido", 800, 002, "60 dias",));
productos. push(new Cafe ("tostado", 800, 003, "90 dias",));

console.log(productos);

for (const Cafe of productos){
    Cafe.sumaIva();
} 

const stockCafe = ["torrado", " molido", " tostado"];
console.log("Tenemos en stock los siguientes tipos de cafe: " + stockCafe);
console.log("En stock tenemos " + stockCafe.length + " articulos");

let tipoBuscado = prompt ("Ingrese el tipo de café que desea buscar");
for (const Cafe of productos){
    if(Cafe.tipo == tipoBuscado){
        console.log(Cafe);
    }
}

function sumaIva (precio, iva){
    precio = precio;
    iva = 1.21;
    let precioConIva = precio * iva;
    return precioConIva;
}

function calcularInteres (precioConIva, interes) {
    // let precioConIva = precio * 1.21;
    let int = (precioConIva * interes); 
    return int;
}

// let precioConIva = sumaIva();
let precioConInt = calcularInteres();
// let precioFinal = calcularInteres();
let cuotas = parseInt ( prompt ("Ingresa la cantidad de cuotas deseada.\n(3, 6, 9, 12, 18)\n(Presiona s para salir o presiona c para abonar de contado.)"));

while ((cuotas != "s") || (cuotas === "c")) {
    switch (cuotas) {
        case "3":
            precioConIva = sumaIva(800, 1.21);
            interes = 1.15;
            console.log ("En 3 cuotas tenes un 15% de interes adicional. Total: $" + calcularInteres(precioConIva, interes));
            break;
        case "6":
            precioConIva = sumaIva(800, 1.21);
            interes = 1.30;
            console.log ("En 6 cuotas tenes un 30% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
            break;
        case "9":
            precioConIva = sumaIva(800, 1.21);
            interes = 1.45;
            console.log ("En 9 cuotas tenes un 45% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
            break;
        case "12":
            precioConIva = sumaIva(800, 1.21);
            interes = 1.60;
            console.log ("En 12 cuotas tenes un 60% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
            break;
        case "18":
            precioConIva = sumaIva(800, 1.21);
            interes = 1.75;
            console.log ("En 18 cuotas tenes un 75% de interes adicional. Total: $" +  calcularInteres(precioConIva, interes));
            break;
        case "c":
            precioConIva = sumaIva(800);
            console.log ("Abonando de contado el total es: $" + precioConIva);
            break;
        default:
            alert ("No ofrecemos esa cantidad de cuotas");
            break;
        }
            cuotas = prompt ("Ingresa la cantidad de cuotas deseada.\n(3, 6, 9, 12, 18)\n(Presiona s para salir o presiona c para abonar de contado.)");
    }


let desc = precioConIva * 0.90;
let promo = prompt ("Ingresá tu código promocional");
if ((promo === "sapucafe10") || (promo === "SAPUCAFE10")){
    console.log("Felicidades, accediste a un decuento adicional de un 10%!");
    console.log("El total a pagar es: " + desc);
} else if ((promo !== "sapucafe10") || (promo !== "SAPUCAFE10")){
    console.log("Lo siento, no pudimos validar ese código de descuento.");
}


