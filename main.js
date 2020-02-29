// Scroll Reveal //
window.sr = ScrollReveal();
sr.reveal('.scrollBfade', {
  duration: 1500,
  origin: 'bottom',
  distance: '300px',
  viewFactor: 0.3
});

sr.reveal('.scrollLfade', {
  duration: 1500,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.3
});

sr.reveal('.scrollRfade', {
  duration: 1500,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.3
});

// Appear Animation //
let cta = document.querySelector('.cta');

window.addEventListener('scroll', () => {
  let scrollable = document.documentElement.scrollHeight - window.innerHeight-300;
  let scrolled = window.scrollY;

  if (Math.ceil(scrolled) >= scrollable) {
    cta.classList.remove('hidden');
    cta.classList.add('appear');
  }
});






