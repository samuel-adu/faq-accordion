const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', function () {
    accordion.classList.toggle('open');
  });
});
