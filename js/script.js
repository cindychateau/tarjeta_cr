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