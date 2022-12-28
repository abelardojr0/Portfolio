import { starfieldEffect } from "https://cdn.skypack.dev/starfield-effect@0.0.9";

const container = document.getElementById("starfield");
if (container) {
  const options = {
    parent: container,
    numParticles: 3000,
    background: "black",
    particleColor: "white",
    maxParticleSize: 2, //optional
    fps: 60, //optional
    speed: 2, //optional
  };
  starfieldEffect(options);
}
