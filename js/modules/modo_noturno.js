export default function modoNoturno() {
  const modo = document.querySelector("[data-modo]");
  const noite = document.querySelector("[data-noite]");
  const dia = document.querySelector("[data-dia]");
  const menu = document.querySelector("[data-menu]");
  const perfil = document.querySelector("[data-perfil]");
  const texto_animado = document.querySelector("[data-texto_animado]");
  const titulos = document.querySelectorAll("[data-titulo]");
  const sobreTexto = document.querySelector("[data-sobre_texto]");
  const carrossel = document.querySelector(".carrossel");
  const subtitulos = document.querySelectorAll("[data-subtitulo]");
  const form = document.querySelector("[data-form]");
  const inputs = document.querySelectorAll("[data-input]");
  const inputButton = document.querySelector("[data-input][type='submit']");
  const footer = document.querySelector("[data-footer]");
  const imagemSobre = document.querySelector("[data-imagem-sobre]");
  const imagemProjetos = document.querySelector("[data-imagem-projetos]");
  const imagemProjetosInvertida = document.querySelector(
    "[data-imagem-projetos-invertida]"
  );
  const imagemSkills = document.querySelector("[data-imagem-skills]");
  const imagemContato = document.querySelector("[data-imagem-contato]");
  const imagemDivisoria = document.querySelectorAll("[data-imagem-divisoria]");
  const divisoriaInterna = document.querySelectorAll(
    "[data-divisoria-interna]"
  );
  const listaSociais = document.querySelector("[data-lista-sociais");
  const rastros = document.querySelectorAll("[data-rastro]");
  const options = document.querySelectorAll(".option");
  const botoes = document.querySelectorAll(".botao");
  const legend = document.querySelector("legend");
  const body = document.body;

  function mudarModo({ target }) {
    if (target.dataset.modo === "noite") {
      target.dataset.modo = "dia";
      noite.classList.remove("ativo");
      dia.classList.add("ativo");
      menu.classList.remove("noite");
      perfil.setAttribute("src", "img/perfis/perfil-dia.jpg");
      imagemSobre.setAttribute("src", "img/adereços/sobre-imagem-dia.png");
      imagemProjetos.setAttribute(
        "src",
        "img/adereços/projetos-imagem-dia.png"
      );
      imagemProjetosInvertida.setAttribute(
        "src",
        "img/adereços/projetos-imagem-dia-invertida.png"
      );
      imagemSkills.setAttribute("src", "img/adereços/skills-imagem-dia.png");
      imagemContato.setAttribute("src", "img/adereços/contato-imagem-dia.png");
      imagemDivisoria.forEach((imagem) => {
        imagem.setAttribute("src", "img/adereços/divisoria-externa-dia.png");
      });
      divisoriaInterna.forEach((imagem) => {
        imagem.setAttribute("src", "img/adereços/divisoria-interna-dia.png");
      });
      rastros.forEach((rastro) => {
        rastro.style.backgroundColor = "rgb(237, 28, 9)";
      });
      body.style.color = "black";
      legend.style.color = "black";
      carrossel.style.color = "white";
      document.body.style.setProperty("--color-fire", "rgb(237, 28, 9)");
      texto_animado.style.color = "rgb(237, 28, 9)";
      inputButton.style.backgroundColor = "rgb(237, 28, 9)";

      botoes.forEach((botao) => {
        botao.style.backgroundColor = "rgb(237, 28, 9)";
      });
      options.forEach((option) => {
        option.style.border = "2px solid rgb(237, 28, 9)";
      });
      titulos.forEach((titulo) => {
        titulo.style.color = "black";
      });
      sobreTexto.style.color = "black";
      subtitulos.forEach((subtitulo) => {
        subtitulo.style.color = "black";
      });
      inputs.forEach((input) => {
        input.style.border = "2px solid black";

        function iniciarFocus({ target }) {
          target.style.border = "2px solid rgb(237, 28, 9)";
        }
        function removerFocus({ target }) {
          target.style.border = "2px solid black";
        }
        input.addEventListener("focus", iniciarFocus);
        input.addEventListener("blur", removerFocus);
      });
      listaSociais.style.flexDirection = "row";
      form.style.color = "black";
      footer.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      footer.style.color = "black";
      footer.classList.remove("noite");
      if (window.screen.width > 760) {
        subtitulos.forEach((subtitulo) => {
          subtitulo.style.color = "white";
        });
      }
    } else {
      target.dataset.modo = "noite";
      noite.classList.add("ativo");
      dia.classList.remove("ativo");
      menu.classList.add("noite");
      perfil.setAttribute("src", "img/perfis/perfil-noite.jpg");
      imagemSobre.setAttribute("src", "img/adereços/sobre-imagem-noite.png");
      imagemProjetos.setAttribute(
        "src",
        "img/adereços/projetos-imagem-noite.png"
      );
      imagemProjetosInvertida.setAttribute(
        "src",
        "img/adereços/projetos-imagem-noite-invertida.png"
      );
      imagemSkills.setAttribute("src", "img/adereços/skills-imagem-noite.png");
      imagemContato.setAttribute(
        "src",
        "img/adereços/contato-imagem-noite.png"
      );
      imagemDivisoria.forEach((imagem) => {
        imagem.setAttribute("src", "img/adereços/divisoria-externa-noite.png");
      });
      divisoriaInterna.forEach((imagem) => {
        imagem.setAttribute("src", "img/adereços/divisoria-interna-noite.png");
      });
      body.style.color = "white";
      legend.style.color = "white";

      rastros.forEach((rastro) => {
        rastro.style.backgroundColor = "rgb(237, 218, 13)";
      });
      document.body.style.setProperty("--color-fire", "rgb(237, 218, 13)");
      texto_animado.style.color = "rgb(237, 218, 13)";
      inputButton.style.backgroundColor = "rgb(237, 218, 13)";
      botoes.forEach((botao) => {
        botao.style.backgroundColor = "rgb(237, 218, 13)";
      });
      options.forEach((option) => {
        option.style.border = "2px solid rgb(237, 218, 13)";
      });
      titulos.forEach((titulo) => {
        titulo.style.color = "white";
      });
      sobreTexto.style.color = "white";
      subtitulos.forEach((subtitulo) => {
        subtitulo.style.color = "white";
      });
      inputs.forEach((input) => {
        input.style.border = "2px solid white";

        function iniciarFocus({ target }) {
          target.style.border = "2px solid rgb(237, 218, 13)";
        }
        function removerFocus({ target }) {
          target.style.border = "2px solid white";
        }
        input.addEventListener("focus", iniciarFocus);
        input.addEventListener("blur", removerFocus);
      });
      if (window.screen.width > 1024) {
        listaSociais.style.flexDirection = "column";
      }
      form.style.color = "white";
      footer.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
      footer.style.color = "white";
      footer.classList.add("noite");
    }
  }
  modo.addEventListener("click", mudarModo);
}
