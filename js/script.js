// assets/js/script.js
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te responderé pronto.");
});

// Mostrar/ocultar el menú en pantallas pequeñas
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Detectar elementos en pantalla y animarlos
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeInElements.forEach((el) => observer.observe(el));

// Scroll suave al hacer clic en enlaces
const links = document.querySelectorAll('nav ul li a');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Ajuste para el header
            behavior: 'smooth',
        });
    });
});

// Validar el formulario antes de enviar
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar el envío por defecto

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        alert("Por favor, llena todos los campos.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    alert("Gracias por tu mensaje. Pronto me pondré en contacto contigo.");
    form.reset();
});

// Función para validar correos
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Feedback visual
function setFieldStatus(field, isValid) {
    if (isValid) {
        field.classList.remove("error");
        field.classList.add("success");
    } else {
        field.classList.remove("success");
        field.classList.add("error");
    }
}

// Validar campos individualmente
form.addEventListener("input", (e) => {
    const field = e.target;

    if (field.type === "email") {
        setFieldStatus(field, validateEmail(field.value.trim()));
    } else if (field.type === "text" || field.tagName === "TEXTAREA") {
        setFieldStatus(field, field.value.trim() !== "");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    console.log("Mensaje enviado:");
    console.log(`Nombre: ${name}`);
    console.log(`Correo: ${email}`);
    console.log(`Mensaje: ${message}`);

    alert("Mensaje simulado enviado. Revisa la consola.");
    form.reset();
});
