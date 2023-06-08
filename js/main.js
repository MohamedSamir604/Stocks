(function ($) {
//Start spinner function 
function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });

//end spinner function 
    $(document).ready(function () {
        $(window).scroll(function(){
            if($(document).scrollTop() > 80){
               $('.navbar').addClass('scrolled');
            }
            else{
              $('.navbar').removeClass('scrolled');
            }
        });
         //add class active to nav-item on click
         $('li a').on('click', function () {
            $('li a.active').removeClass("active");
        });
        $('.navbar-nav').on('click', 'li a', function () {
            $('.navbar-nav li a.active').removeClass('active');
            $(this).addClass('active');
        });
        $('ul').on('click', 'li', function () {
            $('ul li.active').removeClass('active');
            $(this).addClass('active');
        });
        $('.navbar-toggler').click(function () {
            $(this).toggleClass("active")
        });
      
    });
})(jQuery);
