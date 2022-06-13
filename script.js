const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

function slideInOutAnimation(remove, add) {
  navItems.forEach((item, i) => {
    item.classList.replace(`slide-${remove}-${i+1}`, `slide-${add}-${i+1}`)
  })
}

function toggleNav() {
  // toggle hamburger menu
  menuBars.classList.toggle('change');
  // toggle menu
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // animate in overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

    // animate in nav items
    slideInOutAnimation('out', 'in')
  } else {
    // animate out overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');

    // animate out nav items
    slideInOutAnimation('in', 'out')
  }
}

// event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(item => item.addEventListener('click', toggleNav))