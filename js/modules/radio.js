export default function radio() {
  let aspectRatioGroup = document.querySelector(
    "#aspectRatio--group .segmentedControl"
  );
  let radios = aspectRatioGroup.querySelectorAll("input");
  let i = 1;

  aspectRatioGroup.style.setProperty("--options", radios.length);
  radios.forEach((input) => {
    input.setAttribute("data-pos", i);

    input.addEventListener("click", (e) => {
      aspectRatioGroup.style.setProperty(
        "--options-active",
        e.target.getAttribute("data-pos")
      );
    });

    i++;
  });

  aspectRatioGroup.classList.add("useSlidingAnimation");
}
