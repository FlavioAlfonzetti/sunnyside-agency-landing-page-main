import '../scss/index.scss';

const logoHamburger = document.querySelector("[data-id='logo-hamburger']");
const menuHamburger = document.querySelector("[data-id='menu-hamburger']");
const arrowDown = document.querySelector("[data-id='arrow-down']");

logoHamburger.addEventListener('click', () => {
  menuHamburger.classList.toggle('active');
  arrowDown.classList.toggle('remove');
  if (!menuHamburger.classList.contains('active')) {
    menuHamburger.classList.add('reverse-swing');
    setTimeout(() => {
      menuHamburger.classList.remove('reverse-swing');
    }, 250);
  }
});
