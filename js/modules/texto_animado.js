export default function textoAnimado() {
  function animarTexto(elemento) {
    const texto = "Desenvolvedor Front-End";
    const textoArray = texto.split("");
    elemento.innerHTML = " ";
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }
  const titulo = document.querySelector("[data-texto_animado]");
  animarTexto(titulo);
}
