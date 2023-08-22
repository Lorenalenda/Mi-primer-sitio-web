/* Renderizado generico */
window.onload = () => {
  document.querySelector("header").innerHTML = `
  <div class="header-escritorio">
    <a title="¡Bob Esponja!" href="#top">
      <img class="header-logo" src="./Imagen/logoBobEsponja.png" alt="Logo de ¡Bob Esponja!" />
    </a>
    <nav class="header-nav" >
      <ul>
        <li><a href="#top">Inicio</a></li>
        <li><a href="#images">Imagenes</a></li>
        <li><a href="#info">Información</a></li>
      </ul>
    </nav>
    <button class="menu-hamburguesa" href="" onclick="precionarInterruptor()">
      <i class="menu-hamburguesa-icono fa-solid fa-bars"></i>
    </button>
  </div>
  <nav class="menu-hamburguesa-nav">
    <ul>
      <li><a href="#top">Inicio</a></li>
      <li><a href="#images">Imagenes</a></li>
      <li><a href="#info">Información</a></li>
    </ul>
  </nav>
  `;

  document.querySelector(".contacto").innerHTML =`
  <img src="./Imagen/Bob_esponja_logo.png"  >
  <div class="contacto-info">
    <h1>¡Seguinos en nuestras redes sociales!</h1>
    <div>
      <a target="_blank" href="https://www.instagram.com/conectarlabmendoza/"><i class="rosado fa-brands fa-square-instagram"></i></a>
      <a target="_blank" href="https://www.facebook.com/conectarlabmendoza/"><i class="celeste fa-brands fa-square-facebook"></i></a>
    </div>
  </div>
  `;

  document.querySelector("footer").innerHTML = `
  <div>
    <img title="Bob Esponja" class="footer-logo" src="./Imagen/PinBob.png" alt="Logo Bob Esponja">
    <img title="Bob Esponja" class="footer-logo" src="./Imagen/PinBob8.png" alt="Logo Bob Esponja">
    <img title="Bob Esponja" class="footer-logo" src="./Imagen/PinBob3.png" alt="Logo Bob Esponja">
    <img title="Bob Esponja" class="footer-logo" src="./Imagen/PinBob4.png" alt="Logo Bob Esponja">
    <img title="Bob Esponja" class="footer-logo" src="./Imagen/PinBob5.png" alt="Logo Bob Esponja">
    <img title="Bob Esponja" class="footer-logo" src="./Imagen/PinBob7.png" alt="Logo Bob Esponja">
    <img title="Bob Esponja" class="footer-logo" src="./Imagen/PinBob9.png" alt="Logo Bob Esponja">
  </div>
  <a title="Conectar LAB" href="#top">
    <img class="header-logo" src="./Imagen/Bob_esponja_logo.png"  >
  </a>
`;
};

function precionarInterruptor() {
  document.querySelector(".menu-hamburguesa-nav").classList.toggle("visible");
  document.querySelector(".menu-hamburguesa-icono").classList.toggle("fa-bars-staggered");
}
