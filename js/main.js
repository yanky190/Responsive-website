jQuery(document).ready(function($){

    "user strick"
    $('.slider').ripples({
        dropRadius: 2,
        perturbance: 0.01,
    });


    var typed = new Typed('.text', {
    strings: ["<strong>i Love </strong> <strong class='primary'>coding.</strong>",
      "<stong>and to </strong><strong class='primary'>Shear!!.</strong>"],
      typespeed: 0,
      loop: true
    });

      $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
        enabled: true
        }
      });

    $("#team-members").owlCarousel({
      items: 3,
      autoplay: true,
      smartSpeed: 750,
      loop: true,
      autoplayHoverPause: true,
      Responsive:{
      0:{
        items: 1
      },

      480:{
        items: 2
      },

      768:{
        items: 3
      }
    }
  });

  $('.counter').counterUp({
    delay: 10,
    time: 4000
});

});
