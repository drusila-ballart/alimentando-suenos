document.querySelector('.menu-icon').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'none') {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  });