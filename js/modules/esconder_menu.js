export default function esconderMenu() {
  const menu = document.querySelector("[data-menu]");
  const mudar = document.querySelector("[data-mudar]");

  function esconderMenu() {
    menu.classList.add("esconder");
    menu.classList.remove("mostrar");
    mudar.classList.add("esconder");
    mudar.classList.remove("mostrar");
  }

  function mostrarMenu() {
    menu.classList.remove("esconder");
    menu.classList.add("mostrar");
    mudar.classList.remove("esconder");
    mudar.classList.add("mostrar");
  }

  const body = document.getElementsByTagName("body")[0];

  if (body.addEventListener) {
    // IE9, Chrome, Safari, Opera
    body.addEventListener("mousewheel", detectarDirecaoRolagem, false);
    // Firefox
    body.addEventListener("DOMMouseScroll", detectarDirecaoRolagem, false);
    //mobile
    body.addEventListener("touchmove", detectarDirecaoRolagem, false);
  }

  function detectarDirecaoRolagem(event) {
    let delta = null,
      direction = false;
    if (!event) {
      event = window.event;
    }
    if (event.wheelDelta) {
      // funciona na maioria dos casos
      delta = event.wheelDelta / 60;
    } else if (event.detail) {
      // funciona no Firefox
      delta = -event.detail / 2;
    }
    if (delta !== null) {
      if ((direction = delta > 0)) {
        mostrarMenu();
      } else {
        esconderMenu();
      }
    }

    return direction;
  }
}
