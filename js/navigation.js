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




// Parte que corresponde a la zona del carrito



const addCarritoBoton = Array.from(document.getElementsByClassName('addcarrito'));
const iconoCarrito = document.getElementById('icono-carrito');
const listaCarritoContainer = document.getElementById('lista-carrito');
const totalListaCarrito = document.getElementById('total-carrito');
const finalizarcompra = document.getElementById('finalizar');



let listaCarrito = [];
let totalCarrito = 0;


// fucion para actualizar el precio y mostrarlo en el carrito
function updatetotalCarrito() {
  totalListaCarrito.textContent = `Total: ${totalCarrito} €`;
}


// fución para añadir al carrito
function addToCart(producto) {
  listaCarrito.push(producto);
  totalCarrito += producto.totallin;
  console.log(totalCarrito);
  updatetotalCarrito();
  displaylistaCarrito();

}

// función que muestra las lineas en el carrito
function displaylistaCarrito() {
  listaCarritoContainer.innerHTML = '';
  listaCarrito.forEach(item => {

    let cartItemElement = document.createElement('div');
    cartItemElement.textContent = item.cantidad + "  " + item.nombre;
    listaCarritoContainer.appendChild(cartItemElement);

  });
}



// Función del botón de añadir




addCarritoBoton.forEach(button => {
  button.addEventListener('click', (event) => {
    let card = event.target.closest('.card'); // Get the closest parent card element
    let nombreProducto = card.querySelector('.nombre').textContent;
    let precioProducto = card.querySelector('.precio').textContent;
    let cantidadProducto = card.querySelector('.cantidad input').value;
    let totalLinea;
    precioProducto = precioProducto.substring(0, precioProducto.trim().length - 1);
    nombreProducto = nombreProducto.substring(0, 50);
    precioProducto = parseFloat(precioProducto);
    cantidadProducto = cantidadProducto > 0 ? cantidadProducto : 1;
    totalLinea = parseFloat(cantidadProducto) * precioProducto;

    let producto = {
      nombre: nombreProducto,
      precio: precioProducto,
      cantidad: cantidadProducto,
      totallin: totalLinea
    };
    addToCart(producto);
    displaylistaCarrito();
  });
});


iconoCarrito.addEventListener('click', () => {
  listaCarritoContainer.classList.toggle('show');
});



// función para  finalizar pedidom mostramos un mensaje 

finalizarcompra.addEventListener('click', function () {

  swal("Trenzados online", "Compra finalizada corréctamente", "success");

  totalCarrito = 0;
  updatetotalCarrito();
  listaCarrito = 0;

  listaCarritoContainer.innerHTML = '';
  displaylistaCarrito();

});
