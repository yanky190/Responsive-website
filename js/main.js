jQuery(document). ready(function(){

    "user strick"
    $('.slider').ripples({
        dropRadius: 2,
        perturbance: 0.01,
    });


    $('.text').typed({
        strings:["<strong>i Love </strong> <strong class='primary'>coding.</strong>",
         "<stong>and to</strong><strong class='primary'>Shear!!.</strong>"],
        typeSpeed: 0,
        loop: true
      });

      $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
        enabled: true
        }
      });

      $("#team-members").owlCarousel();

    });
