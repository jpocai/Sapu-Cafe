
function calcularInteres (precio, interes) {
    let int = (precio * interes); 
    return int;
}
let precioFinal = calcularInteres ();
let cuotas = parseInt ( prompt ("Ingresa la cantidad de cuotas deseada.\n(3, 6, 9, 12, 18)\n(Presiona s para salir)"));

while (cuotas != "s") {
    switch (cuotas) {
        case "3":
            precio = 300;
            interes = 1.15;
            console.log ("En 3 cuotas tenes un 15% de interes adicional. Total: $" + calcularInteres (300, 1.15));
            break;
        case "6":
            precio = 300;
            interes = 1.30;
            console.log ("En 6 cuotas tenes un 30% de interes adicional. Total: $" + calcularInteres (300, 1.30));
            break;
        case "9":
            precio = 300;
            interes = 1.45;
            console.log ("En 9 cuotas tenes un 45% de interes adicional. Total: $" + calcularInteres (300, 1.45));
            break;
        case "12":
            precio = 300;
            interes = 1.60;
            console.log ("En 12 cuotas tenes un 60% de interes adicional. Total: $" + calcularInteres (300, 1.60));
            break;
        case "18":
            precio = 300;
            interes = 1.75;
            console.log ("En 18 cuotas tenes un 75% de interes adicional. Total: $" + calcularInteres (300, 1.75));
            break;
        default:
            alert ("No ofrecemos esa cantidad de cuotas");
            break;
        }
            cuotas = prompt ("Ingresa la cantidad de cuotas deseada.\n(3, 6, 9, 12, 18)\n(Presiona s para salir)");
    }

let promo = prompt ("Ingresá tu código promocional");
if ((promo === "sapucafe10") || (promo === "SAPUCAFE10")){
    console.log("Felicidades, accediste a un decuento adicional de un 10%!");
} else if ((promo !== "sapucafe10") || (promo !== "SAPUCAFE10")){
    console.log("Lo siento, no pudimos validar ese código de descuento.");
}
