const menuItems = document.querySelectorAll('.header .menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

document.addEventListener('click', function(event) {
  const isClickInside = event.target.closest('.menu-item');

  if (!isClickInside) {
    // Remove 'active' class from any open menu items 
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
  }
});