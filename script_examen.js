//Ejercicio simulación gestión de compras:
//pedir cantidad y precio, calcular el total y aplicar el descuento
//hacer el iva con el precio real
//preguntar si quiere volver a hacer la operacion con otros datos
//una vez acabado mostrar por consola: Numero de operaciones/ Gasto total/ gasto medio/ gasto mayor y menor de todas las operaciones
function gestion_compras(){
    const IVA = 0.21;
    do{
    let precio = parseInt(prompt("Introduzca el precio del producto:"));
    let cant = parseInt(prompt("Introduzca las unidades del producto:"));
    let importe = precio*cant;

    let precioDescontado = importe - descuento(importe);
    let precioReal = precioDescontado + (precioDescontado*IVA);
    console.log(`Subtotal: ${importe}€\nCon Descuento: ${precioDescontado}€\n Más IVA (21%) Total a Pagar: ${precioReal.toFixed(2)}€`);

    let repetir = (window.confirm("¿Desea realizar otra operación?"));
    }while(repetir!=0)


}
//Descuento: 5%/10%/15%
function decuento(importe){
    let descuento=0;
    if (importe>=50 && importe<=99,99) descuento=importe * 0.05;
    if (importe>=100 && importe<=199,99) descuento=importe * 0.10;
    if (importe>=200) descuento = importe * 0.15;
    return descuento;
}
