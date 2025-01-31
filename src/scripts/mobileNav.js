// Get the nav toggle button and off-canvas nav elements
const navToggle = document.querySelector('.nav-toggle');
const offCanvasNav = document.querySelector('.off-canvas-nav');

// Add an event listener to the nav toggle button
navToggle.addEventListener('click', () => {
  // Toggle the 'open' class on the off-canvas nav
  offCanvasNav.classList.toggle('open');
});

// mobile nav "x" to close menu
const nav = document.querySelector('.off-canvas-nav');
const closeButton = document.querySelector('.nav-close-btn');

closeButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});