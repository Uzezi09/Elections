const toggBar = document.querySelector('.toggle-bar')
const menu = document.querySelector('.list');

toggBar.addEventListener('click', () => {
  // menu.classList.add('active');
  menu.style.display = 'block';
  console.log('hi')
})