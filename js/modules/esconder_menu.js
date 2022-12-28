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

  let ultimaPosicao = 0;
  function scrollando(event) {
    const posicaoAtual = window.scrollY;
    if (ultimaPosicao > posicaoAtual) {
      mostrarMenu();
    } else {
      esconderMenu();
    }
    ultimaPosicao = posicaoAtual;
  }
  document.addEventListener("scroll", scrollando);

}
