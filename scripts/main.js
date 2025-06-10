//Llamamos los elemenots html para manipularlos

const btn = document.querySelector("button");
const colors = document.querySelectorAll(".color");
const hexes = document.querySelectorAll(".hex");

//Añadimos el evento click al boton
btn.addEventListener("click", generarColores);

//Creamos la funcion para generar los colores

function generarColores() {
  for (let i = 0; i < colors.length; i++) {
    //Genera un color al azar

    const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const hexColor = `#${randomColor}`;
    //Añadimos el color al background

    colors[i].style.background = hexColor;

    //Añadimos la animacion

    colors[i].classList.add("fade-in");
    setTimeout(() => colors[i].classList.remove("fade-in"), 400);

    //Añadimos el codigo hex al color

    hexes[i].textContent = hexColor;
  }
}

//Generamos la paleta de colores

generarColores();