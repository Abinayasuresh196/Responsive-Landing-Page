const navbar = document.getElementById('navbar');
const scrollMsg = document.getElementById('scrollMsg');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    scrollMsg.classList.add('show');
  } else {
    navbar.classList.remove('scrolled');
    scrollMsg.classList.remove('show');
  }
});
