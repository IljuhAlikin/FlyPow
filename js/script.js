$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.slider').slick({
        arrows: true, 
        dots: true, 
        adaptiveHeight: false , 
        slidesToShow : 3, 
        slidesToScroll: 1, 
        speed:1000,
        easing:'ease',  
        infinite:true, 
        // initialSlide:3,
        autoplay:true,
        autoplaySpeed: 1500,
        waitForAnimate: true,
        centerMode: false,
        rows: 1, 
        slidesPerRow: 3,
        vertical: false, 
        verticalSwiping: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 700,
              settings: {
                arrows: false, 
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },      
          ]
        
    });



    $('.slidersecond').slick({
      arrows: true, 
      dots: true, 
      adaptiveHeight: false , 
      slidesToShow : 3, 
      slidesToScroll: 1, 
      speed:1000,
      easing:'ease',  
      infinite:true, 
      // initialSlide:3,
      autoplay:true,
      autoplaySpeed: 1500,
      waitForAnimate: true,
      centerMode: false,
      rows: 1, 
      slidesPerRow: 3,
      vertical: false, 
      verticalSwiping: false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },      
        ]
      
  });


});


