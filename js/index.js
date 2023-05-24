const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');
const body = document.body;

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  content.classList.toggle('active');
});

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
}

