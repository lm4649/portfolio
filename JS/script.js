$(function(){
  // scrolling navigation
	$(".navbar a, #to-the-top, #to-the-skills").on("click", function(event){
		event.preventDefault();
		var hash = this.hash;

		$("body,html").animate({scrollTop:$(hash).offset().top},900, function(){window.location.hash=hash;})
	});

  // modifiy project card background on hover

  $(".timeline-panel").hover( function() {
      // mouse enter: add dark overlay
      overlay = "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), ";
      backgroundStyle = overlay +  $(this).css("background-image");
      $(this).css("background-image", backgroundStyle);
      console.log("hover!", backgroundStyle);
    }, function() {
        // mouse leave: remove dark overlay
      backgroundStyle = $(this).css("background-image").match(/url\(.+\)/);
      $(this).css("background-image", backgroundStyle[0]);
      console.log("blur!", backgroundStyle[0]);
    });
})
