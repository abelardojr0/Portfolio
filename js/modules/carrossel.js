export default function carrossel() {
  const links = document.querySelectorAll(".option");
  const pessoais = document.querySelector("[data-carrossel-pessoais]");
  const pessoaisMobile = document.querySelector("[data-mobile-pessoais]");
  const cursosMobile = document.querySelector("[data-mobile-cursos]");
  const cursos = document.querySelector("[data-carrossel-cursos]");
  const radioPessoais = document.querySelector("[data-radio-pessoais]");
  const radioCursos = document.querySelector("[data-radio-cursos]");
  const opcoes = document.querySelectorAll("[data-radio]");

  function mudarTema() {
    if (radioPessoais.checked) {
      pessoais.classList.add("ativo");
      pessoaisMobile.classList.add("ativo");
      cursos.classList.remove("ativo");
      cursosMobile.classList.remove("ativo");
    } else if (radioCursos.checked) {
      cursos.classList.add("ativo");
      cursosMobile.classList.add("ativo");
      pessoais.classList.remove("ativo");
      pessoaisMobile.classList.remove("ativo");
    }
  }

  opcoes.forEach((opcao) => {
    opcao.addEventListener("change", mudarTema);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link2) => {
        link2.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}
