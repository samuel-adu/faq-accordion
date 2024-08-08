const accordions = document.querySelectorAll('.accordion');
const details = document.querySelectorAll('.details');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', function (event) {
    const element = event.target;
    const isExpanded = element.getAttribute('aria-expanded') === 'true';
    element.setAttribute('aria-expanded', !isExpanded);
    accordion.classList.toggle('open');
  });
});
