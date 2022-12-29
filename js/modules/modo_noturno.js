export default function modoNoturno() {
  // ESTRUTURA
  const noite = document.querySelector("[data-noite]");
  const dia = document.querySelector("[data-dia]");
  const modo = document.querySelector("[data-modo]");
  const menu = document.querySelector("[data-menu]");
  const body = document.body;

  //TEXTOS
  const texto_animado = document.querySelector("[data-texto_animado]");
  const titulos = document.querySelectorAll("[data-titulo]");
  const sobreTexto = document.querySelector("[data-sobre_texto]");
  const carrossel = document.querySelector(".carrossel");
  const subtitulos = document.querySelectorAll("[data-subtitulo]");
  const form = document.querySelector("[data-form]");

  //FORMULARIO
  const inputs = document.querySelectorAll("[data-input]");
  const inputButton = document.querySelector("[data-input][type='submit']");

  //FOOTER
  const footer = document.querySelector("[data-footer]");

  //IMAGENS
  const perfil = document.querySelector("[data-perfil]");
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

  //DETALHES

  const listaSociais = document.querySelector("[data-lista-sociais");
  const rastros = document.querySelectorAll("[data-rastro]");
  const options = document.querySelectorAll(".option");
  const botoes = document.querySelectorAll(".botao");

  //DOWNLOAD
  const legend = document.querySelector("legend");
  const downloadBotao = document.querySelector("[data-ancora]");

  console.log(downloadBotao);
  function mudarModo({ target }) {
    if (target.dataset.modo === "noite") {
      //VARIAVEIS
      target.dataset.modo = "dia";
      const cor_dia = "rgb(237, 28, 9)";
      const corPrincipal_dia = "black";

      //ESTRUTURA
      noite.classList.remove("ativo");
      dia.classList.add("ativo");
      menu.classList.remove("noite");
      body.style.color = corPrincipal_dia;

      //IMAGENS
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

      // DOWNLOAD
      legend.style.color = corPrincipal_dia;
      downloadBotao.style.color = corPrincipal_dia;
      downloadBotao.style.border = `2px solid ${corPrincipal_dia}`;
      downloadBotao.style.backgroundColor = "rgba(0, 0, 0, 0.2)";

      //TEXTOS
      carrossel.style.color = "white";
      texto_animado.style.color = cor_dia;
      titulos.forEach((titulo) => {
        titulo.style.color = corPrincipal_dia;
      });
      sobreTexto.style.color = corPrincipal_dia;
      if (window.screen.width > 760) {
        subtitulos.forEach((subtitulo) => {
          subtitulo.style.color = "white";
        });
      }

      //CARROSSEL
      document.body.style.setProperty("--color-fire", cor_dia);
      botoes.forEach((botao) => {
        botao.style.backgroundColor = cor_dia;
      });
      options.forEach((option) => {
        option.style.border = `2px solid ${cor_dia}`;
      });
      subtitulos.forEach((subtitulo) => {
        subtitulo.style.color = corPrincipal_dia;
      });

      //FORUMULARIO
      inputButton.style.backgroundColor = cor_dia;
      inputs.forEach((input) => {
        input.style.border = `2px solid ${corPrincipal_dia}`;
        function iniciarFocus({ target }) {
          target.style.border = `2px solid ${cor_dia}`;
        }
        function removerFocus({ target }) {
          target.style.border = `2px solid ${corPrincipal_dia}`;
        }
        input.addEventListener("focus", iniciarFocus);
        input.addEventListener("blur", removerFocus);
      });
      form.style.color = corPrincipal_dia;

      //DETALHES
      listaSociais.style.flexDirection = "row";
      rastros.forEach((rastro) => {
        rastro.style.backgroundColor = cor_dia;
      });

      // FOOTER
      footer.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      footer.style.color = corPrincipal_dia;
      footer.classList.remove("noite");
    } else {
      //VARIAVEIS
      target.dataset.modo = "noite";
      const cor_noite = "rgb(237, 218, 13)";
      const corPrincipal_noite = "white";

      //ESTRUTURA
      noite.classList.add("ativo");
      dia.classList.remove("ativo");
      menu.classList.add("noite");
      body.style.color = corPrincipal_noite;

      //IMAGENS
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

      //DOWNLOAD
      legend.style.color = corPrincipal_noite;
      downloadBotao.style.color = corPrincipal_noite;
      downloadBotao.style.border = `2px solid ${corPrincipal_noite}`;
      downloadBotao.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

      //DETALHES
      rastros.forEach((rastro) => {
        rastro.style.backgroundColor = cor_noite;
      });
      if (window.screen.width > 1024) {
        listaSociais.style.flexDirection = "column";
      }

      //TEXTOS
      texto_animado.style.color = cor_noite;
      sobreTexto.style.color = corPrincipal_noite;
      titulos.forEach((titulo) => {
        titulo.style.color = corPrincipal_noite;
      });

      //CARROSSEL
      document.body.style.setProperty("--color-fire", cor_noite);
      botoes.forEach((botao) => {
        botao.style.backgroundColor = cor_noite;
      });
      options.forEach((option) => {
        option.style.border = `2px solid ${cor_noite}`;
      });
      subtitulos.forEach((subtitulo) => {
        subtitulo.style.color = corPrincipal_noite;
      });

      //FORMULÁRIO
      inputButton.style.backgroundColor = cor_noite;
      inputs.forEach((input) => {
        input.style.border = `2px solid ${corPrincipal_noite}`;

        function iniciarFocus({ target }) {
          target.style.border = `2px solid ${cor_noite}`;
        }
        function removerFocus({ target }) {
          target.style.border = `2px solid ${corPrincipal_noite}`;
        }
        input.addEventListener("focus", iniciarFocus);
        input.addEventListener("blur", removerFocus);
      });
      form.style.color = corPrincipal_noite;

      //FOOTER
      footer.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
      footer.style.color = corPrincipal_noite;
      footer.classList.add("noite");
    }
  }
  modo.addEventListener("click", mudarModo);
}
