
var leftSideFilter = document.querySelector('.search');

var stickyLeftSideFilters = function (e){
  if (leftSideFilter){
    if (window.scrollY >= 200 && document.body.offsetHeight > 400 && window.innerWidth >= '990') {
      leftSideFilter.classList.add('sticky-leftSideFilters');
    }
    else{
      leftSideFilter.classList.remove('sticky-leftSideFilters');
    }
  }
};


var sm = new SocialMedia({
  fontawesome: true,
  icon: {
    google: {
      active : true
    },
    pinterest: {
      active : true
    }
  }
});
sm.init();
