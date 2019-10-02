document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          console.log('lazy-loaded');
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});

$(document).ready(function($) {
  // Gets the video src from the data-src on each button

  var $videoSrc;  
  $('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {

// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
})



// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
  })
 

$('.accordion').on('click', function() { 
  $parent_box = $(this).closest('.accordion-panel');
      //$parent_box.siblings().find('.panel').slideUp(500);
      //$parent_box.siblings().find('.icon').removeClass('down');
      $parent_box.find('.panel').slideToggle(500);
      $parent_box.find('.icon').toggleClass('down');
});

  //initialize swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesOffsetBefore: 310,
     //effect: 'coverflow',
      /*coverflowEffect: {
        rotate: 30,
        slideShadows: false,
      },*/
      loop: true,
      breakpoints: {
        // when window width is <= 767px
        767: {
         slidesPerView: 1,
         spaceBetween: 30,
         slidesOffsetBefore: 0,
       },
     }
   });
  $('.indicator').mousedown(function(){
    swiper;
  });
  swiper.on('slideChange', function () {
    $('.indicator').fadeOut();
  });

  //initialize swiper
  var quoteSwiper = new Swiper('.quote-swiper-container', {
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
   });
    var lastScrollTop = $(window).scrollTop();
    var isIntercomVisible = false;
    
    $(function () {
      $(document).scroll(function () {
        
        /*****Change background color of navbar on scroll*****/
        var $nav = $(".main-menu");
        var $logoWhite = $(".logo-white");
        var $logoBlack = $(".logo-black");
        if ($(this).scrollTop() > $nav.height()) { 
          $nav.addClass('scrolled');
            //$logoWhite.removeClass('visible');
            //$logoWhite.addClass('hidden');
            //$logoBlack.removeClass('hidden');
            //$logoBlack.addClass('visible');
          }
          if ($(this).scrollTop() < $nav.height()) {
            $nav.removeClass('scrolled'); 
        //$logoWhite.removeClass('hidden');
        //$logoWhite.addClass('visible');
        //$logoBlack.removeClass('visible');
        //$logoBlack.addClass('hidden');
      }
      /*****End navbar style*****/

      /******Back to top button*****/
      if ($(this).scrollTop() > 600) {
        $('#topButton').stop().css({
          opacity: 1,
          '-webkit-transform' : 'scale(' + 1 + ')',
          '-moz-transform'    : 'scale(' + 1 + ')',
          '-ms-transform'     : 'scale(' + 1 + ')',
          '-o-transform'      : 'scale(' + 1 + ')',
          'transform'         : 'scale(' + 1 + ')',
          "visibility": "visible"
        }).animate({
          "bottom": "100px",
          "right": "20px",
          '-webkit-transform' : 'scale(' + 1 + ')',
          '-moz-transform'    : 'scale(' + 1 + ')',
          '-ms-transform'     : 'scale(' + 1 + ')',
          '-o-transform'      : 'scale(' + 1 + ')',
          'transform'         : 'scale(' + 1 + ')',
          "visibility": "visible"
        }, {
          duration: 100,
        });
        $('#intercom-button').stop().css({
          opacity: 1,
          '-webkit-transform' : 'scale(' + 1 + ')',
          '-moz-transform'    : 'scale(' + 1 + ')',
          '-ms-transform'     : 'scale(' + 1 + ')',
          '-o-transform'      : 'scale(' + 1 + ')',
          'transform'         : 'scale(' + 1 + ')',
          "visibility": "visible"
        }).animate({
          "bottom": "20px",
          "right": "20px",
          '-webkit-transform' : 'scale(' + 1 + ')',
          '-moz-transform'    : 'scale(' + 1 + ')',
          '-ms-transform'     : 'scale(' + 1 + ')',
          '-o-transform'      : 'scale(' + 1 + ')',
          'transform'         : 'scale(' + 1 + ')',
          "visibility": "visible"
        }, {
          duration: 100,
        });
        /*Intercom('update', {"hide_default_launcher": false});*/
        isIntercomVisible = true;
      } else if ($(this).scrollTop() == 0) {
        $('#topButton').stop().css({
          opacity: 0,
          "visibility": "hidden"
        }).animate({
          "visibility": "hidden"
        }, {
          duration: 1500,
        });
      }
      
      /******End Back to top button******/

      /*****Parallax scrolling effect*****/
      if($(window).width() > 768){
        var parallaxElements = $('.parallax');
        var parallaxQuantity = parallaxElements.length;
        window.requestAnimationFrame(function() {
          for (var i = 0; i < parallaxQuantity; i++) {
            var currentElement = parallaxElements.eq(i);
            var scrolled = $(this).scrollTop();

            currentElement.css({
              transform: 'translate3d(0,' + scrolled * -0.1 + 'px, 0)',
            });
          }
        });
      }

      else if($(window).width() < 768){
        $('.side-image-image > div').removeClass('parallax');
        
      }
      /*****End Parallax scrolling effect*****/
    });
    });
  });
$('#topButton').on('click', function(e) {
  e.preventDefault();
  $('body, html').animate({
    scrollTop: 0
  }, 800);

});
/******Menu Button Toggle******/
function myFunction(x) {
  x.classList.toggle("change");
}

var featuredRow = $('.featured-row');
var emptyRow = $('.empty-row');
if (featuredRow.height() > emptyRow.height()) {
    emptyRow.height(featuredRow.height());
    console.log('height set');

}

/******Keep Top Level Menu Item clickable link******/
$('.navbar ul.navbar-nav > .dropdown > a[href]').click(function() {
  var dropdown = $(this).next('.dropdown-menu');
  if (dropdown.length == 0 || $(dropdown).css('display') !== 'none') {
    if (this.href) {
      location.href = this.href;
    }
  }
});
$('button').click(function(){
  if ($('.navbar-toggler').hasClass('change')){
    console.log('button opened');
    $('.main-menu').addClass('purple-background');
  }
  else {
    $('.main-menu').removeClass('purple-background');
  }

});

/******End Top Level Menu Item******/

/*****Start Typewriter effect*****/
if ($('.typewriter').length){
  $('.typewriter').css('display', 'none');
  setTimeout(function(){
    $('.typewriter').css('display', 'flex');

    var str = $('.typewriter').html(),
    i = 0,
    isTag,
    text,
    cursor = "|",
    timer;

    (function type() {
      text = str.slice(0, ++i);
      if (text === str){ 
        i = 0;
        blink();
        return;
      }
      $('.typewriter').html(text + " " + cursor);
      timer = setTimeout(type, 140);
    }());

    function blink() {
      i++;
      const line = str + " " + (i%2 ? cursor : '');
      $('.typewriter').html(line);
      if (i < 20) timer = setTimeout(blink, 300);
      else fade();
    }

    function fade() {
      $('.typewriter').html(str);
    }

  }, 300);
}
/*****End Typewriter effect*****/

/*****BEGIN HANDLEBAR HELPERS*****/
Handlebars.registerHelper('prettyTime', function(uglyTime) {
	return moment(uglyTime,"M/DD/YYYY h:mm:ss A").format("h:mm");
});
Handlebars.registerHelper('prettyTimeMeridian', function(uglyTime) {
	return moment(uglyTime,"M/DD/YYYY h:mm:ss A").format("A");
});
Handlebars.registerHelper('prettyDate', function(uglyTime) {
	return moment(uglyTime,"M/DD/YYYY h:mm:ss A").format("dddd, MMMM Do, YYYY");
});
/*****END HANDLEBAR HELPERS*****/

/*****BEGIN NO SESSIONS*****/
function noSessions(){
	if(jQuery(".sessions .session").length==0){
		jQuery(".results").html("There are no sessions available.");
	}
	else {
		hasSessions();
	}
}
/*****END NO SESSIONS*****/

/*****BEGIN HAS SESSIONS*****/
function hasSessions(){
	jQuery(".sessions .sessionDetails").slideUp(0);
	jQuery(".sessions .sessionTitle").addClass("collapsed");
	jQuery(".sessions .sessionTitle").click(function(){
		// if ( jQuery( ".sessions .sessionDetails" ).is( ":hidden" ) ) {
		// 			jQuery( ".sessions .sessionDetails" ).show();
		// 		} else {
		// 			jQuery( ".sessions .sessionDetails" ).slideUp();
		// 		}


		if ( jQuery(".sessions .sessionDetails").is(":hidden") ) {
			jQuery(this).next(".sessionDetails").show();
			jQuery(this).toggleClass("collapsed expanded");
		} else {
			jQuery(".sessions .sessionDetails").slideUp(0);
		}

		// jQuery(this).next(".sessionDetails").css('display','block');
		// jQuery(this).next(".sessionDetails").slideToggle();
		// jQuery(this).toggleClass("collapsed expanded");
		// jQuery('.sessions .sessionDetails').css('display','block');
	});
}
/*****END HAS SESSIONS*****/

/*****BEGIN DISPLAY DATA*****/
function templateLoad(templatePath,dataPath,renderLocation){
  console.log(dataPath);
  console.log(templatePath);
  console.log(renderLocation);
  jQuery.ajax({
   url: dataPath,
   data: '{}',
   type:"get",
   dataType:'json',
   success: function (data) {
    jQuery.get(templatePath+"?v="+Math.random(), function(template) {
     var rendered = Handlebars.compile(template);
     var result = rendered(data);
     jQuery(renderLocation).html(result);
     noSessions();    });
  },
  error: function (xhr, status) {
    /*Error*/
                                            //console.log("There is an error");
                                          }
                                        });
}
/*****END DISPLAY DATA*****/

function templateRegisterLoad(dataPath,renderLocation){
  console.log(dataPath);
  console.log(renderLocation);
  jQuery.ajax({
   url: dataPath,
   data: '{}',
   type:"get",

 });
}

/***** USI DATA - SCHEDULE AND COURSES *****/
if ((".course-results").length) {
	templateLoad("https://conference.ungerboeck.com/unite/handlebars-templates/courses.php", "https://ds.ungerboeck.com/digitalSignage/api/Sessions/Get?orgCode=10&eventId=359448&usage=711&rooms=&date=&usage=711&rooms=&date=", ".course-results")
}

if ((".course-results-emea").length) {
	templateLoad("https://conference.ungerboeck.com/unite/handlebars-templates/courses.php", "https://ds.ungerboeck.com/digitalSignage/api/Sessions/Get?orgCode=34&eventId=9190&usage=711", ".course-results-emea")
}

if ((".ungerboeck-sessions").length) {
	templateLoad("https://conference.ungerboeck.com/unite/handlebars-templates/sessions.php", "https://ds.ungerboeck.com/digitalSignage/api/Sessions/Get?orgCode=10&eventId=359441&rooms=&date=&rooms=&date=", ".ungerboeck-sessions")
}

if ((".ungerboeck-sessions-apac").length) {
	templateLoad("https://conference.ungerboeck.com/unite/handlebars-templates/sessions.php", "https://ds.ungerboeck.com/digitalSignage/api/Sessions/Get?orgCode=10&eventId=363419&Usage710%20711%712%PE", ".ungerboeck-sessions-apac")
}

if ((".ungerboeck-sessions-emea").length) {
	templateLoad("https://conference.ungerboeck.com/unite/handlebars-templates/sessions.php", "https://ds.ungerboeck.com/digitalSignage/api/Sessions/Get?orgCode=34&eventId=9187&Status=30&Usage=711", ".ungerboeck-sessions-emea")
}

/*if ((".global-register").length) {
  templateRegisterLoad("https://registration.ungerboeck.com/emc00/EventSearch.htm?mid=4", ".global-register")
}*/
