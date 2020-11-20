// Paralax
  // setTimeout serve para carregar primeiro as imagens
  setTimeout(function() {
    $('#data-area').parallax({imageSrc: 'Foto1.jpeg'});
    $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
  }, 200);

  // scroll para as seções

  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-menu');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'home-menu') {
      scrollTo = bannerSection;
    } else if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'contact-area') {
      scrollTo = contactSection;
    } else {
      scrollTo = contactSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

});