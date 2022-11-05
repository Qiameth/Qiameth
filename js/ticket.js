function captura() {
  var nombre = document.getElementById("inputNombre").value;
  var apellido = document.getElementById("inputApellido").value;
  var correo = document.getElementById("inputCorreo").value;
  var cantidad = document.getElementById("inputCantidadEntradas");
  var cantidadValue = document.getElementById("inputCantidadEntradas").value;
  var categoriaValue = document.getElementById("categoriaEntrada").value;
  var totalPagar = calcularPrecio(categoriaValue, cantidad);

  const labelNombre = document.getElementById("etiquetaNombre");
  const labelApellido = document.getElementById("etiquetaApellido");
  const labelCorreo = document.getElementById("etiquetaCorreo");
  const labelCantidad = document.getElementById("etiquetaCantidad");
  const labelCategoria = document.getElementById("etiquetaCategoria");
  const labelPrecioTotal = document.getElementById("etiquetaTotal");

  labelNombre.innerHTML = nombre;
  labelApellido.innerHTML = apellido;
  labelCorreo.innerHTML = correo;
  labelCantidad.innerHTML = cantidadValue;
  labelPrecioTotal.innerHTML = "$" + totalPagar;

  switch (categoriaValue) {
    case "1":
      labelCategoria.innerHTML = "Estudiante";
      break;
    case "2":
      labelCategoria.innerHTML = "Trainee";
      break;
    case "3":
      labelCategoria.innerHTML = "Junior";
      break;
    case "4":
      labelCategoria.innerHTML = "General";
      break;
    default:
      labelCategoria.innerHTML = "General";
      break;
  }
}

function esconder() {
  var x = document.getElementById("sectionResumen");
  var y = document.getElementById("sectionDatos");

  if (x.style.display === "none") {
    x.style.display = "block";

    y.style.display = "none";
  } else {
    x.style.display = "none";

    y.style.display = "block";
  }
}

/**Variables capturadas del form */
const labelTotal = document.getElementById("precioTotal");


/**Calcula el precio onchange */
function calcularPrecio(categ, cant) {
  let cantidadEntradas = cant.value;
  let precioTotal = 200;
  let precioSinDescuento = precioTotal * cantidadEntradas;

  if (cantidadEntradas < 0) {
    return;
  } else {
    precioTotal *= cantidadEntradas;

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
      default:
        precioTotal *= 1;
        precioSinDescuento = "";
        break;
    }

    if (categ === "4") {
      labelTotal.innerHTML = precioTotal;
    } else {
      labelTotal.innerHTML =
        precioTotal + "  \u00A0$" + ("<del>" + precioSinDescuento + "</del>");
    }
    return precioTotal;
  }
}

/**Limpiar el campo total a pagar cuando se presione borrar*/
function limpiarTotalPagar() {
  var getValue = document.getElementById("inputNombre");
  const labelApel = document.getElementById("inputApellido");
  const labelCor = document.getElementById("inputCorreo");
  const labelCant = document.getElementById("inputCantidadEntradas");
  const labelCat = document.getElementById("categoriaEntrada");

  if (getValue.value != "") {
    getValue.value = "";
  }
  labelNom.reset();
  labelTotal.innerHTML = "";
  labelApel.innerHTML = "";
  labelCat.innerHTML = "";
  labelCant.innerHTML = "";
  labelCor.innerHTML = "";
  
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
  } else {
    datosResumen();
  }
}

/**Cerrar la ventana de resumen de compra */
function cerrarVentana() {
  window.close("resumenCompra.html");
}
