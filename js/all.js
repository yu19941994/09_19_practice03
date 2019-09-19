$(document).ready(function() {
   $('.showtopbar').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('topbar-show');
  });
});