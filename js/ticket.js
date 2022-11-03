/**Calcula el precio onchange */
function calcularPrecio(categ, cant) {
  const labelTotal = document.getElementById("precioTotal");

  let cantidadEntradas = cant.value;
  let precioTotal = 200;
  let precioSinDescuento = precioTotal * cantidadEntradas;

  switch (categ) {
    case "1":
      precioTotal *= 0.2;
      break;
    case "2":
      precioTotal *= 0.5;
      break;
    case "3":
      precioTotal *= 0.85;
      break;
    case "4":
      precioTotal *= 1;
      precioSinDescuento = "";
      break;
  }

  if (cantidadEntradas < 0) {
    return;
  } else {
    precioTotal *= cantidadEntradas;
    if (categ === "4") {
      labelTotal.innerHTML = precioTotal;
      return;
    } else {
      labelTotal.innerHTML =
        precioTotal + "  \u00A0$" + ("<del>" + precioSinDescuento + "</del>");
    }
  }
}

/**Limpiar el campo total a pagar cuando se presione borrar*/
function limpiarTotalPagar() {
  const labelTotal = document.getElementById("precioTotal");
  labelTotal.innerHTML = "";
}

/**Abrir ventana de resumen de compra */
function abrirVentana() {
  const caracVentana = "right=100,top=100,width=700,height=540";
  const handle = window.open(
    "resumenCompra.html",
    "resumenCompra",
    caracVentana
  );
  if (!handle) {
    window.alert("No se pudo abrir la ventana debido al bloqueo de popups");
  }
}

/**Cerrar la ventana de resumen de compra */
function cerrarVentana() {
  window.close("resumenCompra.html");
}

/**Temporal, ARREGLAR!! ---- */
function datosResumen() {
  const labelNombre = document.getElementById("etiquetaNombre");
  const labelTotal = document.getElementById("precioTotal");
  labelNombre.innerHTML = "nombre provisorio";
}
datosResumen();
