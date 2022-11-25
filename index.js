// Contenedor de peliculas
const peliculas = document.querySelector(".peliculas-container");
// El contenedor de las categorías
const categories = document.querySelector(".categories");
// Un htmlCollection de botones de todas las categorías (mostrar el dataset)
const categoriesList = document.querySelectorAll(".category");
// Botón para abrir y cerrar menú
const barsBtn = document.querySelector(".menu-label");
// Carrito
const cartMenu = document.querySelector(".cart");
// Contenedor de productos del carrito
const peliculasCart = document.querySelector(".cart-container");
//El total en precio del carrito
const total = document.querySelector(".total");
// Botón para abrir y cerrar carrito
const cartBtn = document.querySelector(".cart-label");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
//  Modal de agregado al carrito.
const successModal = document.querySelector(".add-modal");
//  Btn delete
const deleteBtn = document.querySelector(".btn-delete");
// Botón de comprar
const buyBtn = document.querySelector(".btn-buy");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const renderPelicula = (pelicula) =>{
  const {id, name, price, duration, year, ranking, poster } = pelicula;
  return `
  <div class="card-pelicula">
    <img src=${poster} alt=${name}>
    <div class="pelicula-info">
        <div class="pelicula-top">
            <h3>${name}</h3>
            <p>Año: ${year}</p>
        </div>
        <div class="pelicula-mid">
            <h4>${ranking}/10</h4>
          <p>${duration}</p>
      </div>
        <div class="pelicula-bot">
            <p>ARS: $${price}</p>
            <button class="btn-add"
            data-id='${id}'
            data-name='${name}'
            data-price='${price}'
            data-poster='${poster}'>Agregar</button>
        </div>
    </div>
  </div>
  `
}

//Filtro de películas
const renderFilteredPeliculas = (category) => {
  const peliculasList = pelisData.filter(
    (pelicula) => pelicula.category === category
  );
  peliculas.innerHTML = peliculasList.map(renderPelicula).join("");
};

// Cambia el estado visual de las categorias a la seleccionada
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

//cambiar el filtro de películas
const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  // cambio de estado visual de los botones
  changeBtnActiveState(selectedCategory);
};

//Filtro de películas
const applyFilter = (e) => {
  console.log(e.target.dataset);
  if (!e.target.classList.contains("category")) return;
  changeFilterState(e);
  if (!e.target.dataset.category) {
    peliculas.innerHTML = "";
    renderFilteredPeliculas();
  } else {
    renderFilteredPeliculas(e.target.dataset.category);
  }
};

// Se abre el menu y cierra el cart si esta abierto
const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

// Se abre el cart y cierra el menu si esta abierto
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

// Cerrar  menu y cart
const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

const closeOnScroll = () => {
  if (
    !barsMenu.classList.contains("open-menu") &&
    !cartMenu.classList.contains("open-cart")
  )
    return;
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

// Agregado de películas y manejo del carrito.

const renderCartPeliculas = (cartPelicula) => {
  const {id, name, price, poster} = cartPelicula;
  return `    
  <div class="cart-item">
    <img src=${poster} alt="Poster de ${name}" />
    <div class="item-info">
      <h3 class="item-title">${name}</h3>
      <span class="item-price">ARS: $${price}</span>
    </div>
    <div class="item-handler">
      <button class="btn-delete-item" 
      data-id='${id}'
      data-name='${name}'
      data-price='${price}'
      data-poster='${poster}'>
      </button>
    </div>
  </div>`;
};

const renderCart = () => {
  // Si el carrito esta vacío
  if (!cart.length) {
    peliculasCart.innerHTML = `<p class="empty-msg"> No hay peliculas en el carrito. </p>`;
    return;
  }
  // Renderizamos lo que hay
  peliculasCart.innerHTML = cart.map(renderCartPeliculas).join("");
};

const getCartTotal = () => {
  return cart.reduce(
    (acc, cur) => acc + Number(cur.price),
    0
  );
};

const showTotal = () => {
  total.innerHTML = `ARS= $ ${getCartTotal()}`;
};

const isExistingCartPelicula = (pelicula) => {
  return cart.find((item) => item.id === pelicula.id);
};

const createPeliculaData = (id, name, price, poster) => {
  return { id, name, price, poster };
};
const createCartPelicula = (pelicula) => {
  cart = [...cart, { ...pelicula, quantity: 1}];
};

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart(cart);
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

const deletePelicula = (e) => {
  if(!e.target.classList.contains("btn-delete-item")) return;
  const { id, name, price, poster} = e.target.dataset;
  const peliId = cart.findIndex((obj) => obj.id === id)
  if (peliId > -1){
    cart.splice (peliId, 1);
  }
  checkCartState();
  showTotal();
}

const addPelicula = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const { id, name, price, poster } = e.target.dataset;

  const pelicula = createPeliculaData(id, name, price, poster);

  //El producto exista en el carrito
  if (isExistingCartPelicula(pelicula)) {
    showSuccessModal("Esta película ya está en el carrito");
  } else {
    //Que no exista el product
    createCartPelicula(pelicula);
    showSuccessModal("La película se ha agregado al carrito");
  }
  checkCartState();
  showTotal();
};


const resetCartItems = () => {
    cart = [];
    checkCartState();
    showTotal();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

const completeBuy = () => {
    completeCartAction(
      "¿Desea completar su compra?",
      "La compra se ha realizado correctamente"
    );
};
  
const deleteCart = () => {
    completeCartAction(
      "¿Está seguro de que desea vaciar el carrito?",
      "No hay productos en el carrito"
    );
};



const init = () => {
  checkCartState();
  renderFilteredPeliculas("classic");
  barsBtn.addEventListener("click", toggleMenu);
  categories.addEventListener("click", applyFilter);
  cartBtn.addEventListener("click", toggleCart);
  barsMenu.addEventListener("click", closeOnClick);
  window.addEventListener("scroll", closeOnScroll);
  overlay.addEventListener("click", closeOnOverlayClick);
  peliculas.addEventListener("click", addPelicula);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);
  peliculasCart.addEventListener("click", deletePelicula);
  document.addEventListener("DOMContentLoaded", showTotal);
};

init();