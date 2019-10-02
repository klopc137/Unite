function myFunction(e){e.classList.toggle("change")}document.addEventListener("DOMContentLoaded",function(){var e=[].slice.call(document.querySelectorAll("img.lazy"));if("IntersectionObserver"in window){let s=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){let t=e.target;t.src=t.dataset.src,t.srcset=t.dataset.srcset,console.log("lazy-loaded"),t.classList.remove("lazy"),s.unobserve(t)}})});e.forEach(function(e){s.observe(e)})}}),$(document).ready(function(e){var s;e(".video-btn").click(function(){s=e(this).data("src")}),console.log(s),e("#myModal").on("shown.bs.modal",function(t){e("#video").attr("src",s+"?autoplay=1&amp;modestbranding=1&amp;showinfo=0")}),e("#myModal").on("hide.bs.modal",function(t){e("#video").attr("src",s)}),e(".accordion").on("click",function(){$parent_box=e(this).closest(".accordion-panel"),$parent_box.find(".panel").slideToggle(500),$parent_box.find(".icon").toggleClass("down")});var t=new Swiper(".swiper-container",{slidesPerView:3,spaceBetween:30,slidesOffsetBefore:310,loop:!0,breakpoints:{767:{slidesPerView:1,spaceBetween:30,slidesOffsetBefore:0}}});e(".indicator").mousedown(function(){}),t.on("slideChange",function(){e(".indicator").fadeOut()});new Swiper(".quote-swiper-container",{centeredSlides:!0,autoplay:{delay:9500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},effect:"fade",fadeEffect:{crossFade:!0}}),e(window).scrollTop();e(function(){e(document).scroll(function(){var s=e(".main-menu");e(".logo-white"),e(".logo-black");if(e(this).scrollTop()>s.height()&&s.addClass("scrolled"),e(this).scrollTop()<s.height()&&s.removeClass("scrolled"),e(this).scrollTop()>600?(e("#topButton").stop().css({opacity:1,"-webkit-transform":"scale(1)","-moz-transform":"scale(1)","-ms-transform":"scale(1)","-o-transform":"scale(1)",transform:"scale(1)",visibility:"visible"}).animate({bottom:"100px",right:"20px","-webkit-transform":"scale(1)","-moz-transform":"scale(1)","-ms-transform":"scale(1)","-o-transform":"scale(1)",transform:"scale(1)",visibility:"visible"},{duration:100}),e("#intercom-button").stop().css({opacity:1,"-webkit-transform":"scale(1)","-moz-transform":"scale(1)","-ms-transform":"scale(1)","-o-transform":"scale(1)",transform:"scale(1)",visibility:"visible"}).animate({bottom:"20px",right:"20px","-webkit-transform":"scale(1)","-moz-transform":"scale(1)","-ms-transform":"scale(1)","-o-transform":"scale(1)",transform:"scale(1)",visibility:"visible"},{duration:100}),!0):0==e(this).scrollTop()&&e("#topButton").stop().css({opacity:0,visibility:"hidden"}).animate({visibility:"hidden"},{duration:1500}),e(window).width()>768){var t=e(".parallax"),o=t.length;window.requestAnimationFrame(function(){for(var s=0;s<o;s++){var n=t.eq(s),a=e(this).scrollTop();n.css({transform:"translate3d(0,"+-.1*a+"px, 0)"})}})}else e(window).width()<768&&e(".side-image-image > div").removeClass("parallax")})})}),$("#topButton").on("click",function(e){e.preventDefault(),$("body, html").animate({scrollTop:0},800)});var featuredRow=$(".featured-row"),emptyRow=$(".empty-row");function noSessions(){0==jQuery(".sessions .session").length?jQuery(".results").html("There are no sessions available."):hasSessions()}function hasSessions(){jQuery(".sessions .sessionDetails").slideUp(0),jQuery(".sessions .sessionTitle").addClass("collapsed"),jQuery(".sessions .sessionTitle").click(function(){jQuery(".sessions .sessionDetails").is(":hidden")?(jQuery(this).next(".sessionDetails").show(),jQuery(this).toggleClass("collapsed expanded")):jQuery(".sessions .sessionDetails").slideUp(0)})}function templateLoad(e,s,t){console.log(s),console.log(e),console.log(t),jQuery.ajax({url:s,data:"{}",type:"get",dataType:"json",success:function(s){jQuery.get(e+"?v="+Math.random(),function(e){var o=Handlebars.compile(e)(s);jQuery(t).html(o),noSessions()})},error:function(e,s){}})}function templateRegisterLoad(e,s){console.log(e),console.log(s),jQuery.ajax({url:e,data:"{}",type:"get"})}featuredRow.height()>emptyRow.height()&&(emptyRow.height(featuredRow.height()),console.log("height set")),$(".navbar ul.navbar-nav > .dropdown > a[href]").click(function(){var e=$(this).next(".dropdown-menu");0!=e.length&&"none"===$(e).css("display")||this.href&&(location.href=this.href)}),$("button").click(function(){$(".navbar-toggler").hasClass("change")?(console.log("button opened"),$(".main-menu").addClass("purple-background")):$(".main-menu").removeClass("purple-background")}),$(".typewriter").length&&($(".typewriter").css("display","none"),setTimeout(function(){$(".typewriter").css("display","flex");var e,s=$(".typewriter").html(),t=0,o="|";function n(){const e=s+" "+(++t%2?o:"");$(".typewriter").html(e),t<20?setTimeout(n,300):$(".typewriter").html(s)}!function a(){if((e=s.slice(0,++t))===s)return t=0,void n();$(".typewriter").html(e+" "+o),setTimeout(a,140)}()},300)),Handlebars.registerHelper("prettyTime",function(e){return moment(e,"M/DD/YYYY h:mm:ss A").format("h:mm")}),Handlebars.registerHelper("prettyTimeMeridian",function(e){return moment(e,"M/DD/YYYY h:mm:ss A").format("A")}),Handlebars.registerHelper("prettyDate",function(e){return moment(e,"M/DD/YYYY h:mm:ss A").format("dddd, MMMM Do, YYYY")}),".course-results".length&&templateLoad("https://conference.ungerboeck.com/unite/handlebars-templates/courses.php","https://ds.ungerboeck.com/digitalSignage/api/Sessions/Get?orgCode=10&eventId=359448&usage=711&rooms=&date=&usage=711&rooms=&date=",".course-results"),".course-results-emea".length&&templateLoad("https://conference.ungerboeck.com/unite/handlebars-templates/courses.php","https://ds.ungerboeck.com/digitalSignage/api/Sessions/Get?orgCode=34&eventId=9190&usage=711",".course-results-emea"),".ungerboeck-sessions".length&&templateLoad("https://conference.ungerboeck.com/unite/handlebars-templates/sessions.php","https://ds.ungerboeck.com/digitalSignage/api/Sessions/Get?orgCode=10&eventId=359441&rooms=&date=&rooms=&date=",".ungerboeck-sessions"),".ungerboeck-sessions-apac".length&&templateLoad("https://conference.ungerboeck.com/unite/handlebars-templates/sessions.php","https://ds.ungerboeck.com/digitalSignage/api/Sessions/Get?orgCode=10&eventId=363419&Usage710%20711%712%PE",".ungerboeck-sessions-apac"),".ungerboeck-sessions-emea".length&&templateLoad("https://conference.ungerboeck.com/unite/handlebars-templates/sessions.php","https://ds.ungerboeck.com/digitalSignage/api/Sessions/Get?orgCode=34&eventId=9187&Status=30&Usage=711",".ungerboeck-sessions-emea");