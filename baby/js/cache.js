if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/themes/custom/baby/js/sw.js')
    .then(function(reg) {
      // registration worked
      console.log('Registration completed with scope ');
    }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}