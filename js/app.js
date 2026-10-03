const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');


// ========================================
// ABRIR / CERRAR MENÚ
// ========================================

menuToggle.addEventListener('click', () => {

    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')) {

        menuToggle.textContent = '✕';

    } else {

        menuToggle.textContent = '☰';

    }

});


// ========================================
// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
// ========================================

const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {

    link.addEventListener('click', () => {

        navbar.classList.remove('active');

        menuToggle.textContent = '☰';

    });

});



// ========================================
// CARRUSEL DE SERVICIOS
// ========================================

const services = [

    {
        number: "01",
        name: "Hojalatería y carrocería",

        description: [
            "Reparación de golpes y abolladuras",
            "Reparación de carrocería dañada",
            "Corte y sustitución de secciones dañadas",
            "Unión mediante soldadura"
        ],

        image: "img/car.jpg"
    },

    {
        number: "02",
        name: "Soldadura automotriz",

        description: [
            "Soldadura eléctrica",
            "Soldadura autógena",
            "Reparaciones estructurales de carrocería"
        ],

        image: "img/hero2/car-being.jpg"
    },

    {
        number: "03",
        name: "Puertas y mecanismos",

        description: [
            "Reparación de puertas que no abren",
            "Reparación de puertas atoradas",
            "Ajuste de puertas descolgadas",
            "Reparación de puertas corredizas",
            "Cambio de baleros de puertas corredizas"
        ],

        image: "img/hero2/repair-man.jpg"
    },

    {
        number: "04",
        name: "Pintura y acabados",

        description: [
            "Pintura automotriz",
            "Igualación de color",
            "Pulido",
            "Detallado"
        ],

        image: "img/hero2/man-spraying.jpg"
    },

    {
        number: "05",
        name: "Refacciones y piezas",

        description: [
            "Cotización de piezas para reparación"
        ],

        image: 'img/hero2/man-white.jpg'
    }

];

// ========================================
// PRECARGAR IMÁGENES DE SERVICIOS
// ========================================

services.forEach(service => {
    const image = new Image();
    image.src = service.image;
});


// ========================================
// ELEMENTOS DEL DOM
// ========================================

const serviceImage = document.querySelector('.service-image img');
const serviceNumber = document.querySelector('.service-number');
const serviceName = document.querySelector('.service-content h3');
const serviceDescription =
    document.querySelector('.service-description');

const previousButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');

const indicators = document.querySelectorAll('.indicator');


// ========================================
// SERVICIO ACTUAL
// ========================================

let currentService = 0;


// ========================================
// MOSTRAR SERVICIO
// ========================================

function showService(index) {

    const service = services[index];

    const serviceSlide = document.querySelector('.service-slide');

    serviceSlide.classList.add('is-changing');

    setTimeout(() => {

        serviceImage.src = service.image;
        serviceImage.alt = service.name;
        serviceNumber.textContent = service.number;
        serviceName.textContent = service.name;
        serviceDescription.innerHTML = service.description
    .map(item => `<span class="service-point">${item}</span>`)
    .join("");

        indicators.forEach((indicator, indicatorIndex) => {
            indicator.classList.toggle(
                'active',
                indicatorIndex === index
            );
        });

        serviceSlide.classList.remove('is-changing');

    }, 350);
}


// ========================================
// SERVICIO ANTERIOR
// ========================================

previousButton.addEventListener('click', () => {

    currentService--;

    if (currentService < 0) {
        currentService = services.length - 1;
    }

    showService(currentService);

});


// ========================================
// SERVICIO SIGUIENTE
// ========================================

nextButton.addEventListener('click', () => {

    currentService++;

    if (currentService >= services.length) {
        currentService = 0;
    }

    showService(currentService);

});


// ========================================
// INDICADORES
// ========================================

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentService = index;
        showService(currentService);
    });
});

// Mostrar el primer servicio al cargar la página
showService(currentService);

// ========================================
// HERO SLIDER
// ========================================

const heroCurrent = document.querySelector('.hero-background-current');
const heroNext = document.querySelector('.hero-background-next');

const heroImages = [

    'img/hero2/man-painting.jpg',
    'img/hero2/man-spraying.jpg',
    "img/shot-professional.jpg",
   // 'img/hero2/man-white.jpg',

   // 'img/hero2/auto-service-salon.jpg',
    'img/hero2/auto-service.jpg',
    'img/hero2/car-being.jpg',
    'img/hero2/handsome.jpg',
    'img/hero2/repair-man.jpg',
    'img/hero/car.jpg',
    'img/hero/male-painter.jpg',
    'img/hero/shot-professional.jpg'




];

let currentHeroImage = 0;

let currentLayer = heroCurrent;


// ========================================
// PRECARGAR IMÁGENES
// ========================================

heroImages.forEach(image => {

    const img = new Image();

    img.src = image;

});


// ========================================
// IMAGEN INICIAL
// ========================================

heroCurrent.style.backgroundImage =
    `url("${heroImages[currentHeroImage]}")`;


// ========================================
// CAMBIAR IMAGEN
// ========================================

function changeHeroImage() {

    currentHeroImage++;

    if (currentHeroImage >= heroImages.length) {
        currentHeroImage = 0;
    }

    const nextImage =
        `url("${heroImages[currentHeroImage]}")`;


    // Determinar cuál capa está visible

    const nextLayer =
        currentLayer === heroCurrent
            ? heroNext
            : heroCurrent;


    // Preparar siguiente imagen

    nextLayer.style.backgroundImage = nextImage;


    // Mostrar siguiente capa

    nextLayer.style.opacity = '1';


    // Ocultar capa actual

    currentLayer.style.opacity = '0';


    // La siguiente capa se convierte en la actual

    currentLayer = nextLayer;

}


// ========================================
// CAMBIO AUTOMÁTICO
// ========================================

setInterval(changeHeroImage, 7000);