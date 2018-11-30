
  var target = document.querySelector('.product-buy-link a');
  if(target) {
    target.addEventListener('click', function ( e ) {
      ga('create', 'UA-107768715-1');
      ga('send', 'event', {
        eventCategory : 'Outbound Link',
        eventAction : 'click',
        eventLabel : e.target.title,
        transport : 'beacon'
      });
    })
  }