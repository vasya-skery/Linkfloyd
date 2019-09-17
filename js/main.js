$(function(){
    $('.selectpicker').selectpicker();
});

$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      // dots: true
    }
  }
  ]
});

$(document).ready(function () {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();

         //>=, not <=
        if (scroll >= 45) {
            //clearHeader, not clearheader - caps H
            $(".top-header").addClass("active");
        } else {
        	$(".top-header").removeClass("active");
        }
    }); //missing );

    $(window).load(function() {
    	var scroll = $(window).scrollTop();

    	 //>=, not <=
    	if (scroll >= 45) {
    	    //clearHeader, not clearheader - caps H
    	    $(".top-header").addClass("active");
    	} else {
    		$(".top-header").removeClass("active");
    	}
    });

    $(function() {
      $("a[href*=#]:not([href=#])").click(function() {
          if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
              var t = $(this.hash);
              if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                  scrollTop: (t.offset().top - 100)
              }, 1000), !1
          }
      })
  });
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
	