const custom__Select   = document.getElementById('custom__Select');
const selected__value  = document.getElementById('selected__value');
const options__list   = document.getElementById('options__list');
const options__  = options__list.querySelectorAll('div');

// 1) Toggle de l’ouverture/fermeture
custom__Select.addEventListener('click', () => {
  options__list.style.display = options__list.style.display === 'block' ? 'none' : 'block';
});

// 2) Empêcher le toggle sur clic d’une option
options__list.addEventListener('click', e => {
  e.stopPropagation();
});

// 3) Gestion de la sélection
options.forEach(option => {
  option.addEventListener('click', e => {
    selected__value.textContent   = e.target.textContent;
    options__list.style.display   = 'none';
  });
});

// 4) Fermer si clic à l’extérieur
document.addEventListener('click', e => {
  if (!custom__Select.contains(e.target)) {
    options__list.style.display = 'none';
  }
});