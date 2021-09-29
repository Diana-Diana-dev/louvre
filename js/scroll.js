function scrollToTop(sectionId) {
  console.log(sectionId);
  var targetScroll =  $(sectionId).offset().top;
  $('html, body').animate({
      scrollTop: (targetScroll - 100 /* минус сто - это нужный вам отступ, чтобы сделать прокрутку немного выше якоря */ )
  }, 500);
}

$('header li a[href*="#"]').on('click', function(){
	sectionId = $(this).attr('href');
	scrollToTop(sectionId);
});

$('footer li a[href*="#"]').on('click', function(){
	sectionId = $(this).attr('href');
	scrollToTop(sectionId);
});
