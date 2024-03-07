document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-btn');
    var navbar = document.querySelector('.nav-links');
    var overlay = document.querySelector('.overlay');
    var menuIcon = menuBtn.querySelector('img');
  
    var isClosed = true; // Initially, the menu is closed
  
    menuBtn.addEventListener('click', function() {
      if (isClosed) {
        navbar.classList.remove('close-menu');
        navbar.classList.add('open-menu');
        overlay.style.display = 'block';
        menuIcon.src = 'images/icon-menu-close.svg'; // Change the image source
      } else {
        navbar.classList.remove('open-menu');
        navbar.classList.add('close-menu');
        overlay.style.display = 'none';
        menuIcon.src = 'images/icon-menu.svg'; // Change the image source back
      }
      
      // Toggle the state of isClosed
      isClosed = !isClosed;
    });
  });
  