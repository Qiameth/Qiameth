function crearHeader_Footer(){
    const header = document.getElementById("barraNavegacion");
    header.innerHTML += CrearNavBar();

    const footer = document.getElementById("barraFooter");
    footer.innerHTML += CrearFooter();
}

function CrearNavBar(){
    const html = `<nav class="navbar navbar-expand-lg navbar-light color-fondo-gris-oscuro ">      
      <!-- logo -->
      <a class="navbar-brand text-white px-lg-5 px-3" href="/index.html">
          <img src="./recursos/codoacodo.png" alt="Logo" width="90" height="50"
            class="d-inline-block align-text-center" />
          Conf Bs As
        </a>
      
      <button class="navbar-toggler mx-3" type="button" data-toggle="collapse" data-target="#opciones">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- enlaces -->
      <div class="collapse navbar-collapse justify-content-end px-5" id="opciones">
        <ul class="navbar-nav px-5">
          <li class="nav-item">
            <a class="nav-link" href="index.html#la-conferencia">La conferencia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color-gris-claro" href="index.html#los-oradores">Los oradores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color-gris-claro" href="index.html#lugar-y-fecha">El lugar y la fecha</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color-gris-claro" href="index.html#ser-orador">Coviértete en orador</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-success" href="./tickets.html">Comprar tickets</a>
          </li>
        </ul>
      </div>
    </nav>`;
    return html;

}

function CrearFooter(){
    const html = `<div class="container-fluid text-center text-white center col-12" style="background-color: #1e4a63">
      <section class="mt-3 pb-4">
        <div class="row d-flex justify-content-evenly align-items-center pt-5">
          <div class="col-lg-1 ">
            <h6 class="font-weight-bold">
              <a href="#!" class="text-white links-footer">Preguntas frecuentes</a>
            </h6>
          </div>

          <div class="col-lg-1">
            <h6 class="font-weight-bold">
              <a href="#!" class="text-white links-footer">Contáctanos</a>
            </h6>
          </div>

          <div class="col-lg-1">
            <h6 class="font-weight-bold">
              <a href="#!" class="text-white links-footer">Prensa</a>
            </h6>
          </div>

          <div class="col-lg-1">
            <h6 class="font-weight-bold">
              <a href="#!" class="text-white links-footer">Conferencias</a>
            </h6>
          </div>

          <div class="col-lg-1">
            <h6 class="font-weight-bold">
              <a href="#!" class="text-white links-footer text-nowrap">Términos y <br> condiciones</a>
            </h6>
          </div>

          <div class="col-lg-1">
            <h6 class="font-weight-bold">
              <a href="#!" class="text-white links-footer">Privacidad</a>
            </h6>
          </div>

          <div class="col-lg-1">
            <h6 class="font-weight-bold">
              <a href="#!" class="text-white links-footer">Estudiantes</a>
            </h6>
          </div>
        </div>
      </section>
    </div>`;
    return html; 
}


crearHeader_Footer();