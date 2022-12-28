export default function iniciarScrollSuave() {
  function scrollParaSecao(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const secao = document.querySelector(href);
    secao.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const linksInternos = document.querySelectorAll("[data-link]");
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollParaSecao);
  });
}
