jQuery(document). ready(function(){

    "user strick"
    $('.slider').ripples({
        dropRadius: 2,
        perturbance: 0.01,
    });

    $(".text").typed({
        strings: ["First Sentence.", "Second Sentence"],
        typespeed: 0,
        loop: true
    })
})