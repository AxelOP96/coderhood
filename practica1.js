//practica de pseudocodigo
/*
vida = 4;
pociones de vida = 2;
si (vida == 0) {
    si(pociones de vida > 0) {
        vida = vida + 1;
        pociones de vida = pociones de vida - 1;
    } sino {
        informar("perdiste");
    }
}
*/
//CLASE 2
var vida = 4;
var pociones =2;
if (vida == 0) {
    if(pociones > 0) {
        vida = vida + 1;
        pociones = pociones - 1;
    } else {
        console.log("Perdiste");
    }
} 
//CLASE 2 TAREA 1
var huevos = 3;
var chocolate = 1;
var harina = 0.5;
var cucharadasDeAzucar = 5;
if (huevos < 3 || chocolate < 1 || harina < 0.5 || cucharadasDeAzucar < 5) {
    console.log("Hay que ir a comprar");
} else {
    console.log("Estamos listos para cocinar");
}
//TAREA 2
var precioDePrenda = 2500;
var porcentajeDeAumento = 1.25;
var precioFinal = precioDePrenda * porcentajeDeAumento;
console.log(precioFinal);
if (precioFinal > 4000) {
    console.log("Precio excedido");
}
//TAREA 3
var repartidores = 5;
var esFeriado = true;
var gananciaDelDia = 3000;
var porcentajeParaSueldos = 1.65;
var sueldoNetodeRepartidor = gananciaDelDia * porcentajeParaSueldos;
var gananciaDelComercioFinal = 40000;
if (esFeriado == true) {
    porcentajeParSueldos = 1.8;
}
//CLASE 3 TAREA 1
var limite = 30;
var inicio = 0;
for(var i = 0; i < limite; i++) {
    console.log(inicio % 2 == 0);
    inicio ++;
}
//TAREA 2
var limite = 50;
var inicio = 0;
while (inicio % 2 == 1) {
    console.log(inicio);
    inicio ++;
}
//TAREA 3
var limite = 50;
var inicio = 0;
while (inicio < limite) {
    console.log(inicio % 3 == 0);
    inicio ++;
}
console.log(inicio);
//TAREA 4
var limite = 500;
var inicio = 0;
while (inicio < limite) {
    console.log(inicio);
    inicio++;
    inicio + inicio;
}