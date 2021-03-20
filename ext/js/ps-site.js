$('.details .btn-about').on('click', function(){
    $(this).addClass('active');
    $('.details .btn-resume').removeClass('active');
    $('.details .btn-portfolio').removeClass('active');
    $('.details .btn-download').removeClass('active');
    $('.details .about').show(1000);
    $('.container').show(1000);
    $('.details .resume').hide(1000);
    $('.details .download').hide(1000);
    $('.resume-page').hide(1000);
    $('.portfolio-page').hide(1000);
});

$('.details .btn-resume').on('click', function(){
    $(this).addClass('active');
    $('.details .btn-about').removeClass('active');
    $('.details .btn-portfolio').removeClass('active');
    $('.details .btn-download').removeClass('active');
    $('.details .resume').show(1000);
    $('.resume-page').show(1000);
    $('.details .about').hide(1000);
    $('.details .portfolio').hide(1000);
    $('.details .download').hide(1000);
    $('.portfolio-page').hide(1000);
});

$('.details .btn-portfolio').on('click', function(){
    $(this).addClass('active');
    $('.details .btn-resume').removeClass('active');
    $('.details .btn-about').removeClass('active');
    $('.details .btn-download').removeClass('active');
    $('.portfolio-page').show(1000);
    $('.details .portfolio').show(1000);
    $('.details .resume').hide(1000);
    $('.details .about').hide(1000);
    $('.details .download').hide(1000);
    $('.resume-page').hide(1000);
});

$('.details .btn-download').on('click', function(){
    $(this).addClass('active');
    $('.details .btn-about').removeClass('active');
    $('.details .btn-resume').removeClass('active');
    $('.details .btn-portfolio').removeClass('active');
    $('.details .download').show(1000);
    $('.container').show(1000);
    $('.details .portfolio').hide(1000);
    $('.details .resume').hide(1000);
    $('.details .about').hide(1000);
    $('.resume-page').hide(1000);
    $('.portfolio-page').hide(1000);
});