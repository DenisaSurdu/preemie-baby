
  var nav = document.querySelector('.main-menu-mobile');

  var desktopNav = document.querySelector('#block-baby-main-menu .menu');
  var productFilter = document.querySelector('.filter-products');
  var logoImage = document.querySelector('header.row .logo img');

  var stickyTopMenuAndLogo = function ( e ) {
    if ( productFilter || nav || desktopNav ) {
      if ( window.scrollY >= 100 ) {
        if ( window.innerWidth >= '990' ) {
          nav.classList.add('sticky-menu');
          desktopNav.classList.add('sticky-menu');
        }
        if ( productFilter ) {
          productFilter.classList.add('filter-products-menu');
        }
        doLogoReplace('down');
      }
      else {
        nav.classList.remove('sticky-menu');
        desktopNav.classList.remove('sticky-menu');
        if ( productFilter ) {
          productFilter.classList.remove('filter-products-menu');
        }
        doLogoReplace('up');
      }
    }
  };

  var doLogoReplace = function ( direction ) {
    var nav = document.querySelector('#block-baby-main-menu ul.menu li.menu-item a');
    var mobile = document.querySelector('header.row');
    var img = document.createElement("img");
    img.src = logoImage.src;
    img.width = '50';
    if ( direction == 'down' && window.innerWidth >= '990' ) {
      nav.innerText = '';
      nav.appendChild(img);
    }
    else {
      img.id = 'top-menu-logo';
      if ( !document.querySelector('#top-menu-logo') ) {
        mobile.appendChild(img);
        if ( window.innerWidth < '990' ) {
          img.onclick = function () {
            return document.location.href = '/';
          };
        }
      }
      nav.innerText = '';
      nav.innerText = 'Home';
    }
    if ( window.scrollY < 100 && document.querySelector('#top-menu-logo') ) {
      document.querySelector('#top-menu-logo').remove();
    }
  };

  $('.menu-item--expanded').each(function () {
    $(this).find('a.is-active').first().attr('href', '#');
    $(this).find('a.is-active').first().click(function ( e ) {
      e.preventDefault();
      return false;
    })
  });
  $('.main-menu-mobile').click(function () {
    $('#block-baby-main-menu').clone().appendTo('.responsive-main-menu');
    $('#block-baby-main-menu ul').addClass('hidden-md-down');
    $('.responsive-main-menu').addClass('expand').attr('style', 'margin:0;');

    $('.responsive-main-menu ul').removeClass('hidden-md-down');
  });
  $('.close-menu').click(function () {
    $('.responsive-main-menu').removeClass('expand').attr('style', '');
    $('.search-page-filter').removeClass('expand').attr('style', '');
    $('.search-page-filter-form').appendTo('.search');
    $('.search-page-filter-form').addClass('hidden-md-down');
    $('.search-page-filter').remove('.search-page-filter-form');
    $('.responsive-main-menu #block-baby-main-menu').remove();
  });

  $('.filter-products').click(function () {
    $('.search-page-filter-form').appendTo('.search-page-filter');
    $('.search-page-filter').addClass('expand').attr('style', 'margin:0;');
    $('.search-page-filter-form').removeClass('hidden-md-down');

  });
