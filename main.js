const navLogo = document.querySelector('nav > a');
const navToggle = document.querySelector('nav > button');
const navToggleLine = document.querySelectorAll('nav > button > span');
const navList = document.querySelector('#navList');
const navListItem = document.querySelectorAll('#navList a');

navLogo.addEventListener('click', () => {
  navList.classList.contains('flex') &&
    navList.classList.replace('flex', 'hidden');

  navToggleLine.forEach((toggleLine, i) => {
    switch (i) {
      case 0:
        toggleLine.classList.toggle('-rotate-45');
        break;
      case 1:
        toggleLine.classList.toggle('scale-0');
        break;
      default:
        toggleLine.classList.toggle('rotate-45');
    }
  });
});

navListItem.forEach((navItem) =>
  navItem.addEventListener('click', () => {
    navList.classList.contains('flex') &&
      navList.classList.replace('flex', 'hidden');

    navToggleLine.forEach((toggleLine, i) => {
      switch (i) {
        case 0:
          toggleLine.classList.toggle('-rotate-45');
          break;
        case 1:
          toggleLine.classList.toggle('scale-0');
          break;
        default:
          toggleLine.classList.toggle('rotate-45');
      }
    });
  })
);

navToggle.addEventListener('click', () => {
  navToggleLine.forEach((toggleLine, i) => {
    switch (i) {
      case 0:
        toggleLine.classList.toggle('-rotate-45');
        break;
      case 1:
        toggleLine.classList.toggle('scale-0');
        break;
      default:
        toggleLine.classList.toggle('rotate-45');
    }
  });

  navList.classList.contains('flex')
    ? navList.classList.replace('flex', 'hidden')
    : navList.classList.replace('hidden', 'flex');
});
