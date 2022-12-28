export default function projetos() {
  const links = document.querySelectorAll(".option");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link2) => {
        link2.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}
