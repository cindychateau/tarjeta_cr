console.log("¡Bienvenido!");

function saluda() {
    alert("Hola a todas!");
    console.log("¿Cómo están?");
}

function sobreNombre(elemento) {
    console.log(elemento);
    elemento.innerText = "Elena de Troya";
}

function fueraNombre(h1) {
    h1.innerText = "Cynthia Castillo";
}

function overButton(boton) {
    boton.innerText = "Estas sobre el botón";
    //background-color
    boton.style.backgroundColor = "red";
}

function outButton(boton) {
    boton.innerText = "Botón";
    boton.style.backgroundColor = "purple";
}

function dobleClick(parrafo) {
    //innerText NO admite etiquetas
    //innerHTML SI admite etiquetas
    if(parrafo.innerHTML == "Profesora de Coding Dojo -      <br>Programadora y amante de los gatitos") {
        parrafo.innerText="Vacacionista profesional";
    } else {
        parrafo.innerHTML = "Profesora de Coding Dojo -      <br>Programadora y amante de los gatitos";
    }

    
    parrafo.style.color = "blue";
}

function eliminar(elemento) {
    elemento.remove();
}

function cambia_nombre() {
    //etiqueta
    //.clase
    //#id
    var abc123 = document.querySelector("h1"); //Seleccionando la etiqueta h1
    abc123.innerText = "Juana de Arco";

    var etiqueta_h2 = document.querySelector(".otro_titulo");
    etiqueta_h2.style.color = "aqua";
}

function cambio_clase() {
    var cuadrado = document.querySelector(".cuadrado");
    
    // if(cuadrado.classList.contains('azul')) {
    //     cuadrado.classList.remove('azul');
    //     cuadrado.classList.add('amarillo');
    // } else {
    //     cuadrado.classList.remove('amarillo');
    //     cuadrado.classList.add('azul');
    // }

    cuadrado.classList.toggle('azul');
    cuadrado.classList.toggle('amarillo');

}

var num_clicks = 0;

function nuevo_click() {
    num_clicks++; 
    var span_clicks = document.querySelector("h3 span");
    span_clicks.innerText = num_clicks;
}

function cambia_imagen(variable_img) {
    variable_img.src = "images/gear.png";
}