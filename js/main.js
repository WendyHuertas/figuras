// Declaramos una variable universal
var figura = document.getElementById("figura");

// Funcion para convertir en un criculo
function circulo() {
    figura.classList.toggle("Circulo");
}

// Funcion para convertir en un Rectangulo
function Rectangulo() {
    figura.classList.toggle("Rectangulo");
}

// Funcion para convertir en un Rombo
function Rombo() {
    figura.classList.toggle("Rombo");
}

// Funcion para convertir en una Imagen
function Imagen() {
    figura.classList.toggle("Imagen");
}

// Funcion para convertir en un Gif
function Gif() {
    figura.classList.toggle("Gif");
}

// Funcion para convertir en un Triangulo
function Triangulo() {
    figura.classList.toggle("Triangulo");
}

// Funcion para convertir en una Hoja
function Hoja() {
    figura.classList.toggle("Hoja");
}

// Funcion para convertir en un Pac-Man
function Pac() {
    figura.classList.toggle("Pac");
}

// Funcion para convertir en una Luna
function Luna() {
    figura.classList.toggle("Luna");
}

// Funcion para convertir en un Huevo
function Huevo() {
    figura.classList.toggle("Huevo");
}

// Funcion para convertir en un Trapecio
function Trapecio() {
    figura.classList.toggle("Trapecio");
}

// Funcion para mover hacia arriba 
function moveTop() {
    figura.classList.toggle("moveTop");
}

// Funcion para mover hacia derecha
function moveleft() {
    figura.classList.toggle("moveleft");
}

// Funcion para mover hacia abajo
function movebottom() {
    figura.classList.toggle("movebottom");
}

// Funcion para mover a la izquierda
function moveRigth() {
    figura.classList.toggle("moveRigth");
}

// Funcion para crear un panel desde arriba
function PanelSuperior() {
    const PanelSuperior = document.querySelector(".panel-superior");
    PanelSuperior.classList.toggle("active")
}

// Funcion para cambiar de imagen
function CambiarImagen() {
    let nuevaRutaImagen = 'img/5229972.jpg';
    document.body.style.backgroundImage = 'url("' + nuevaRutaImagen + '")';
}

// Funcion para crear un panel lateral 
function PanelLateral() {
    const panel = document.querySelector(".panel-lateral");
    panel.classList.toggle("active");
}

// Funcion para cambiar de color
function CambiarColor() {
    const BorderIzquierdo = document.querySelector(".left");
    const BorderDerecho = document.querySelector(".rigth");
    BorderIzquierdo.classList.toggle("active");
    BorderDerecho.classList.toggle("active");
    panel.classList.toggle("active");
}

function Propuesta() {
    figura.classList.toggle("estrella");
}






