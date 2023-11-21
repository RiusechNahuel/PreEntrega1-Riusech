
const producto = {
    cantidad: 0,
    precios: [],
};


function calcularCostoTotal() {
    // Obtener la cantidad de productos
    producto.cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));

    let costoTotal = 0;

    // array precios
    for (let i = 1; i <= producto.cantidad; i++) {
        const precioProducto = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));

       
        if (!isNaN(precioProducto) && precioProducto > 0) {
            producto.precios.push(precioProducto);
            costoTotal += precioProducto;
        } else {
            alert("Precio inválido. Inténtelo nuevamente.");
            i--;
        }
    }

    // costo total
    alert(`El costo total de los productos es: $${costoTotal.toFixed(2)}`);

    console.log("Precios individuales:", producto.precios);
}

// boton
const calcularButton = document.getElementById("calcularButton");

calcularButton.addEventListener("click", calcularCostoTotal);
