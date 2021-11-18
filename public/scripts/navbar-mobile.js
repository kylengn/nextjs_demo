const btn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');

btn.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
});
