const toggle = document.querySelector('.nav__toggle');
const menu   = document.querySelector('.nav__menu');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is clicked (single-page style)
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});