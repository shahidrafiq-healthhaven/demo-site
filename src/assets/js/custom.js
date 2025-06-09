//Tooltip
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip()
});

//Scroll Header
$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("#main_header").addClass("add_shadow");
  }
  else {
    $("#main_header").removeClass("add_shadow");
  }
});

// Back To Top Button
var back_to_top_btn = $('#back_to_top_btn');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    back_to_top_btn.addClass('show');
  } else {
    back_to_top_btn.removeClass('show');
  }
});
back_to_top_btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// Header Mega
    const menu = document.querySelector('.menu');
      const menuSection = menu.querySelector('.menu-section');
      const menuArrow = menu.querySelector('.menu-mobile-arrow');
      const menuClosed = menu.querySelector('.menu-mobile-close');
      const menuTrigger = document.querySelector('.menu-mobile-trigger');
      const menuOverlay = document.querySelector('.overlay');
      let subMenu;
      menuSection.addEventListener('click', (e) => {
         if (!menu.classList.contains('active')) {
            return;
         }
         if (e.target.closest('.menu-item-has-children')) {
            const hasChildren = e.target.closest('.menu-item-has-children');
            showSubMenu(hasChildren);
         }
      });
      menuArrow.addEventListener('click', () => {
         hideSubMenu();
      });
      menuTrigger.addEventListener('click', () => {
         toggleMenu();
      });
      menuClosed.addEventListener('click', () => {
         toggleMenu();
      });
      menuOverlay.addEventListener('click', () => {
         toggleMenu();
      });
      function toggleMenu() {
         menu.classList.toggle('active');
         menuOverlay.classList.toggle('active');
      }
      function showSubMenu(hasChildren) {
         subMenu = hasChildren.querySelector('.menu-subs');
         subMenu.classList.add('active');
         subMenu.style.animation = 'slideLeft 0.5s ease forwards';
         const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
         menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
         menu.querySelector('.menu-mobile-header').classList.add('active');
      }
      function hideSubMenu() {
         subMenu.style.animation = 'slideRight 0.5s ease forwards';
         setTimeout(() => {
            subMenu.classList.remove('active');
         }, 300);
         menu.querySelector('.menu-mobile-title').innerHTML = '';
         menu.querySelector('.menu-mobile-header').classList.remove('active');
      }
      window.onresize = function () {
         if (this.innerWidth > 991) {
            if (menu.classList.contains('active')) {
               toggleMenu();
            }
         }
      };