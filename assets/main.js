const nombreproducto = " Jordan ";
let preciounitario =  500 ;
let cantidadeseada = prompt("Cuantas" + nombreproducto + "$" + preciounitario + " desea comprar: " );

function sumarproducto (preciounitario, cantidadeseada) {
    let totalgastado = preciounitario * cantidadeseada;
    return totalgastado
}
let totalDelProducto = sumarproducto (preciounitario, cantidadeseada)

console.log("El total a pagar por el producto es : $" + totalDelProducto)

alert("el total a pagar por " + cantidadeseada + "" + nombreproducto + "es: $" + totalDelProducto);