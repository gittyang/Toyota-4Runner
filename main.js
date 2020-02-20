console.log('hi');

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



