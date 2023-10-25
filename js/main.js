document.getElementById('boton1').onclick = function calcularCostoTotal() {
    const cantidadDeProductos = parseInt(
        prompt("Ingrese la cantidad de productos:")
    );

    let costoTotal = 0;
    //FOR:
    for (let i = 1; i <= cantidadDeProductos; i++) {
        const precioProducto = parseFloat(
            prompt(`Ingrese el precio del producto ${i}:`)
        );
        //IF-ELSE:
        if (!isNaN(precioProducto) && precioProducto > 0) {
            costoTotal += precioProducto;
        } else {
            alert("precio inválido. Inténtelo nuevamente.");
            i--;
        }
    }
    alert(`El costo total de los productos es: $${costoTotal.toFixed(2)}`);
}

calcularCostoTotal();