
// ================================
// MENÚ RESPONSIVE
// ================================

const toggle = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav");


if (toggle && nav) {

    toggle.setAttribute("aria-expanded", "false");

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

    year.textContent =
        new Date().getFullYear();

}


// ================================
// ANIMACIONES AL HACER SCROLL
// ================================

const elementosAnimados = document.querySelectorAll(
    ".service-card, .process-grid > div, .about-copy, .about-panel, .section-heading"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.animationPlayState = "running";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementosAnimados.forEach(elemento => {

    elemento.style.animationPlayState = "paused";

    observer.observe(elemento);

});


// ================================
// BOTÓN FLOTANTE DE WHATSAPP
// ================================

const whatsappFloat = document.createElement("a");

whatsappFloat.href =
    "https://wa.me/message/ARXPBIJVLVKRF1?src=qr";

whatsappFloat.target = "_blank";

whatsappFloat.rel =
    "noopener noreferrer";

whatsappFloat.className =
    "whatsapp-float";

whatsappFloat.setAttribute(
    "aria-label",
    "Contactar por WhatsApp"
);

whatsappFloat.innerHTML = "💬";


document.body.appendChild(
    whatsappFloat
);


// ================================
// EFECTO SUAVE EN BOTONES
// ================================

document
    .querySelectorAll(".btn, .header-cta")
    .forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.transition =
                    "transform .25s ease";

            }
        );

    });

