export default function radio() {
  let aspectRatioGroup = document.querySelector(
    "#aspectRatio--group .segmentedControl"
  );
  let radios = aspectRatioGroup.querySelectorAll("input");
  let i = 1;

  // set CSS Var to number of radios we have
  aspectRatioGroup.style.setProperty("--options", radios.length);

  // loop through radio elements
  radios.forEach((input) => {
    // store position as data attribute
    input.setAttribute("data-pos", i);

    // add click handler to change position
    input.addEventListener("click", (e) => {
      aspectRatioGroup.style.setProperty(
        "--options-active",
        e.target.getAttribute("data-pos")
      );
    });

    // increment counter
    i++;
  });

  // add class to enable the sliding pill animation, otherwise it uses a fallback
  aspectRatioGroup.classList.add("useSlidingAnimation");
}
