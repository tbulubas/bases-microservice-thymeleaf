$('body').scrollspy({
    target: '#myNav'
})

$('#myNav ul li a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var t = this.hash;
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000, function () {
        window.location.hash = t;
    });
})