const toggBar = document.querySelector('.toggle-bar')
const menuList = document.querySelector('.list');

toggBar.addEventListener('click', () => {
  menuList.classList.toggle('active');
  console.log('hi')
})