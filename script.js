/*
  FutuPolis

  Wanna work at Futurice?
  https://http://futurice.com/careers
*/

// # DOM Ready
document.addEventListener("DOMContentLoaded", initSite);

// # Init site
function initSite() {
  initReveals();
}

// # Reveals
function initReveals() {
  // Check we have ScrollReveal
  if (typeof ScrollReveal !== typeof Function) {
    return;
  }

  window.sr = ScrollReveal({ reset: false });
  var revealConfig = {
    distance: "0px",
    delay: 100
  };

  // Home
  sr.reveal(".tagline", revealConfig);
  sr.reveal(".mockup", Object.assign({}, revealConfig, { delay: 600 }));

  // Story
  sr.reveal(".reveal", revealConfig);
  sr.reveal(".reveal--1", revealConfig);
  sr.reveal(".reveal--2", Object.assign({}, revealConfig, { delay: 300 }));
  sr.reveal(".reveal--3", Object.assign({}, revealConfig, { delay: 300 }));
  sr.reveal(".reveal--4", Object.assign({}, revealConfig, { delay: 400 }));
}
