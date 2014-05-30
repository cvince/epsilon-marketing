$(document).ready(function(){

  var init = function(){

    var navActive = $('nav').data('active');
    $('#'+navActive+'-nav').addClass('active');

  }

  init();

})
