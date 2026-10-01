//Ejercicio simulación gestión de compras:
//pedir cantidad y precio, calcular el total y aplicar el descuento
//hacer el iva con el precio real
//preguntar si quiere volver a hacer la operacion con otros datos
//una vez acabado mostrar por consola: Numero de operaciones/ Gasto total/ gasto medio/ gasto mayor y menor de todas las operaciones
//Descuento: 5%/10%/15%
function descuento(importe){
    let descuento=0;
    if (importe>=50 && importe<=99.99) {
        descuento=importe * 0.05;}
    else if (importe>=100 && importe<=199.99){
        descuento=importe * 0.10;
    }else if (importe>=200){
        descuento = importe * 0.15;
    }
    return descuento;
}

function gestion_compras(){
    const IVA = 0.21;
    let operaciones=0;
    let total=0;
    let max=0;
    let min= Infinity;
    do{
        let precio=0;
        let cant=0;
        operaciones+=1;
        //Validaciones
        do{
            precio = parseFloat(prompt("Introduzca el precio del producto:"));
        }while(precio<0 && isNaN(precio))
        do{
            cant = parseFloat(prompt("Introduzca las unidades del producto:"));
        }while(cant<0 && isNaN(cant))
        let importe = precio*cant;

        //Calculamos el precio con el descuento y el precio real
        let precioDescontado = importe - descuento(importe);
        let precioReal = precioDescontado + (precioDescontado*IVA);
        console.log(`Subtotal: ${importe.toFixed(2)}€\nCon Descuento: ${precioDescontado.toFixed(2)}€\n Más IVA (21%) Total a Pagar: ${precioReal.toFixed(2)}€`);

        //Obtenemos datos para el mensaje final
        total=total+precioReal;
        if(max<precioReal)max=precioReal;
        if(min>precioReal)min=precioReal;
    }while((window.confirm("¿Desea realizar otra operación?")))
    //Mensaje con datos finales
    let medio=total/operaciones;
    console.log(`Operaciones: ${parseInt(operaciones)}\nGasto total: ${total.toFixed(2)}€\nGasto medio ${medio.toFixed(2)}€
        \nGasto min ${min.toFixed(2)}€\nGasto max ${max.toFixed(2)}€`)
}
gestion_compras();
