// ================================
// MENÚ RESPONSIVE
// ================================

const toggle = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav");


if (toggle && nav) {

    toggle.addEventListener("click", () => {

        const abierto = nav.classList.toggle("open");

        toggle.setAttribute(
            "aria-expanded",
            abierto
        );

    });

}


// ================================
// CERRAR MENÚ AL SELECCIONAR
// ================================

document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav?.classList.remove("open");

            toggle?.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


// ================================
// AÑO AUTOMÁTICO DEL FOOTER
// ================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}