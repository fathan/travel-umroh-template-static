const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('bg-white', 'shadow-md');
    navbar.classList.remove('bg-transparent');

    navbar.querySelectorAll('a:not(.children a)').forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-gray-800');
    });

    navbar.querySelectorAll('.menu-nav').forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-gray-800');
    });

    navbar.querySelectorAll('.menu-nav-submenu').forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-gray-800');
    });
  } else {
    navbar.classList.remove('bg-white', 'shadow-md');
    navbar.classList.add('bg-transparent');

    navbar.querySelectorAll('a:not(.children a)').forEach(link => {
      link.classList.add('text-white');
      link.classList.remove('text-gray-800');
    });

    navbar.querySelectorAll('.menu-nav').forEach(link => {
      link.classList.add('text-white');
      link.classList.remove('text-gray-800');
    });

    navbar.querySelectorAll('.menu-nav-submenu').forEach(link => {
      link.classList.add('text-white');
      link.classList.remove('text-gray-800');
    });
  }
});
