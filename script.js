function headerNav() {
    let nav = '<nav class="navbar navbar-dark bg-primary">';
    nav += '<div class="container-fluid">';
    nav += '<a class="navbar-brand" href="#">';
    nav += '<img src="imagenes\logoPeluqueria.jpg" alt="imagenes\logoPeluqueria.jpg" width="70" height="54" class="d-inline-block align-text-top">';
    nav += '</a>';
    nav += '<h5>Peluqueria Inclusiva by Alejandro Camacho</h5>';
    nav += '</div>';
    nav += '</nav>';
    nav += '<section>';
    nav += '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
    nav += '<div class="container-fluid">';
    nav += '<a class="navbar-brand" href="inicio.html">Inicio</a>';
    nav += '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">';
    nav += '<span class="navbar-toggler-icon"></span>';
    nav += '</button>';
    nav += '<div class="collapse navbar-collapse" id="navbarNav">';
    nav += '<ul class="navbar-nav">';
    nav += '<li class="nav-item">';
    nav += '<a class="nav-link active" aria-current="page" href="quienesSomos.html">Quienes Somos</a>';
    nav += '</li>';
    nav += '<li class="nav-item">';
    nav += '<a class="nav-link active" aria-current="page" href="contacto.html">Contacto</a>';
    nav += '</li>';
    nav += '<li class="nav-item">';
    nav += '<a class="nav-link active" href="comollegar.html">Como Llegar</a>';
    nav += '</li>';
    nav += '</ul>';
    nav += '</div>';
    nav += '</div>';
    nav += '</nav>';
    nav += '</section>';
    let header = newFunction_1(newFunction);
    header.innerHTML = nav;

    function newFunction() {
        return document.getElementById("header_nav");
    }
}

function newFunction_1(newFunction) {
    return newFunction();
}