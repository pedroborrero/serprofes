// Ejercicio 1: Contador de Clicks (Gestion de Datos)
// 1.- Identificamos las etiquetas exactas que vamos a manipular
const btn_count = document.querySelector("#count_btn");
const span_count = document.querySelector("#count");

// 2.- Variable global para recordar el número de clicks
let contador = 0;


// 3.- Escuchamos el evento click en el botón
btn_count.addEventListener("click", () => {
    contador++
    span_count.textContent = contador;
});

// Ejercicio 2: Toggle Menú (Manipulación de clases CSS)
const btn_toggle = document.querySelector("#toggle_menu");
const nav = document.querySelector("#main_nav");

btn_toggle.addEventListener("click", () => {
    // classList.toggle() es mágico: si la clase "oculto" esta. Si no está la pone
    nav.classList.toggle("oculto");
    // Cambiamos el texto del botón dependiendo de si el menú está visible o no
    const esta_oculto = nav.classList.contains("oculto");
    if (esta_oculto) {
        btn_toggle.textContent = "Mostrar Menú";
    } else {
        btn_toggle.textContent = "Ocultar Menú";
    }
});

// Ejercicio 3: Modo Dark 
const toggle_oscuro = document.querySelector("#theme_toggle");
const texto_switch = document.querySelector(".switch_text");
const cuerpo_web = document.body;

// Paso 1: Comprobar si el usurio ya tenia el modo oscuro 
// guardado al cargar la pagina
const tema_guardado = localStorage.getItem("tema_preferido");
    if (tema_guardado === "oscuro") {
        cuerpo_web.classList.add("dark");
        toggle_oscuro.checked = true;
        texto_switch.textContent = "Desactivar Modo Oscuro";
}

// Paso 2: Escuchar cuando el usuario marca o desmarca el checkbox
toggle_oscuro.addEventListener("change", () => {
    if (toggle_oscuro.checked) {
        // Si checked esta marcado, ponemos clase oscura y lo guardamos
        cuerpo_web.classList.add("dark");
        localStorage.setItem("tema_preferido", "oscuro");
        texto_switch.textContent = "Desactivar Modo Oscuro";
    } else {
        //Si se desmarca, quitamos la clase y guardamos la preferencia clara
        cuerpo_web.classList.remove("dark");
        localStorage.setItem("tema_preferido", "claro");
        texto_switch.textContent = "Activar Modo Oscuro";
    }
});