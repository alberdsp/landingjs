// navigation.js
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const slider = document.querySelector(".slider");
const slides = Array.from(slider.querySelectorAll("img.slide"));
let currentSlide = 0;
let slideInterval;

// creamos una función que recorre las imágenes

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
}

// establece cual es el siguiente slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;

    showSlide(currentSlide);
}

// intervalo en milisegundos
function startSlider() {
    slideInterval = setInterval(nextSlide, 3000);
}



// Iniciamos el sliderlist
startSlider();




// Función de añadir al carrito



const addCarritoBoton = Array.from(document.getElementsByClassName('addcarrito'));
const iconoCarrito = document.getElementById('icono-carrito');
const listaCarritoContainer = document.getElementById('lista-carrito');
const totalListaCarrito = document.getElementById('total-carrito');



let listaCarrito = [];
let totalCarrito = 0;

function updatetotalCarrito() {
  totalListaCarrito.textContent = `Total: ${totalCarrito} €`;
}

function addToCart(producto) {
  listaCarrito.push(producto);
  totalCarrito += producto.precio;
  updatetotalCarrito();
  displaylistaCarrito();
  console.log(totalCarrito);
  console.log(listaCarrito);
}

function displaylistaCarrito() {
  listaCarritoContainer.innerHTML = '';
  listaCarrito.forEach(item => {
    console.log(item.name);
    let cartItemElement = document.createElement('div');
    cartItemElement.textContent = item.nombre;
    listaCarritoContainer.appendChild(cartItemElement);
    console.log(cartItemElement);
  });
}


addCarritoBoton.forEach(button => {
  button.addEventListener('click', () => {


    let card = document.querySelector('.card');
    let nombreProducto = card.querySelector('.nombre').textContent;
    let precioProducto = card.querySelector('.precio').textContent;
    precioProducto =  precioProducto.substring(0,precioProducto.trim().length -1);
   // precioProducto = parseFloat(precioProducto);
    nombreProducto = nombreProducto.substring(0,20);
    precioProducto= parseFloat(precioProducto);
    console.log(nombreProducto);
    console.log(precioProducto);
    
    let producto = {
      nombre: nombreProducto,
      precio: precioProducto,
    };
    addToCart(producto);
    displaylistaCarrito();
  });
});

iconoCarrito.addEventListener('click', () => {
  listaCarritoContainer.classList.toggle('show');
});

