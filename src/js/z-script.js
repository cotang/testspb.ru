// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  

  /* mcc forms - placeholders */
  /* application */
  // jQuery('.form--application .mcc-form input').each(function( key,value) {
  //   var e = jQuery(this);
  //   var text = e.closest('.mcc-value').prev('.mcc-label').find('.mcc-label-mini-div').text();
  //   text = text.replace(/\s+/g,' ');
  //   e.attr('placeholder',text);
  //   e.closest('.mcc-value').prev('.mcc-label').hide();
  // });
  // /* forms */  
  // var myForm = jQuery('.form--review, .form--question, .form-cert');
  // myForm.find('.mcc-form input, .mcc-form textarea').each(function( key,value) {
  //   var e = jQuery(this);
  //   var text = e.closest('tr').find('.mcc-label').text();
  //   text = text.replace(/\s+/g,' ');
  //   e.attr('placeholder',text);
  //   myForm.find('table tr').find('td:first').hide();
  // });
  /* end for wordpress */


  /* табы в услугах */
  $('.services__link').click(function(e) { 
      e.preventDefault();
      $(this).closest('.services__switcher').find('.services__link').removeClass('services__link--active');
      $(this).addClass('services__link--active');
      $(this).closest('.services').find('.services-type').hide();
      $( $(this.hash) ).show();
  });

  /* галерея "партнеры" */
  $('.clients-section__gallery').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* галерея "отзывы" */
  $('.reviews-section__gallery').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });

  /* Form in modal window */
  $('*[data-form]').click( function(e){
    e.preventDefault(); 
    var suffix = $(this).data('form'); 
    $('body').css({'overflow':'hidden'});   
    $('.overlay').show();
    var formClass = '.form--' + suffix;
    $('.overlay').find(formClass).fadeIn();
  });
  /* Close modal window */
  $('.overlay__bg, .overlay__close').click( function(e){ 
    e.preventDefault();
    $('body').css({'overflow':'auto'});
    $(this).closest('.overlay').find('.form').fadeOut();
    $(this).closest('.overlay').fadeOut(400);
  });


  $('.team__link').click(function(e) { 
      e.preventDefault();
      $(this).closest('.team').find('.team__manager').show();
      $(this).hide();
  });
  $('.reviews__link').click(function(e) { 
      e.preventDefault();
      $(this).closest('.reviews').find('.reviews__block').show();
      $(this).hide();
  });
  $('.clients__link').click(function(e) { 
      e.preventDefault();
      $(this).closest('.clients').find('.clients__item').show();
      $(this).hide();
  });





  $('.hamburger').click(function(e) { 
      e.preventDefault();
      $(this).closest('.header').find('.nav').toggle();
  });


  /* hamburger */
  // $('.hamburger').click(function(e) { 
  //     e.preventDefault();    
  //     $(this).closest('.header').find('.header__nav').slideToggle();
  //     $(this).closest('.header').find('.header__services').slideToggle();
  // });
  // $(window).resize(function(){
  //   if ($(window).width() > 768) {
  //     $('.header__nav').show();
  //     $('.header__services').show();
  //   } else {
  //     $('.header__nav').hide();
  //     $('.header__services').hide();
  //   }
  // });








  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  // if ($(window).height() >= $('body').height()){
  //   $('body').addClass('body--full-screen');
  //   $('body').css('padding-bottom', footerHeight+'px');
  //   $('.footer').addClass('footer--stuck-to-bottom');
  // }




    /* Map */
    var map = new GMaps({
        el: '.map__inner',
        lat: 59.971198,
        lng: 30.315121,
        scrollwheel: false
    });
    map.drawOverlay({
        lat: 59.971198,
        lng: 30.315121,
        content: '<div class="pin"></div>'
    });


    /* Map - page contacts */
    var map = new GMaps({
        el: '.contacts__map',
        lat: 59.971198,
        lng: 30.315121,
        scrollwheel: false
    });
    map.drawOverlay({
        lat: 59.971198,
        lng: 30.315121,
        content: '<div class="pin"></div>'
    });


    /* Map */
    // $('.contacts__map').each(function (index, Element) {
    //   var coordLat = $(this).data('lat');
    //   var coordLng = $(this).data('lng');
    //   var map = new GMaps({
    //     el: Element,
    //     lat: coordLat,
    //     lng: coordLng,
    //     scrollwheel: false
    //   });
    //   map.drawOverlay({
    //     lat: coordLat,
    //     lng: coordLng,
    //     content: '<div class="pin"></div>'
    //   });
    // });

});

