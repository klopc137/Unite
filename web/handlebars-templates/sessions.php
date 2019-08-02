	<div class="session-details-inner">
		<div class="sidebar left-sidebar left-align">
			
					<ul id="session_filter_15308050681959955093" class="session_filters no-list-style">
						
						<li>
							<a class="themelink active" data-filter="All" title="All Tracks">General</a>
						</li>
						<!--<li>
							<a class="themelink" data-filter="Destination Marketers" title="Destination Marketers">Destination Marketers</a>
						</li>-->
						<li>
							<a class="themelink" data-filter="Exhibitions" title="Exhibitions">Exhibitions</a>
						</li>
						<li>
							<a class="themelink" data-filter="Financials" title="Financials">Financials</a>
						</li>
						<li>
							<a class="themelink" data-filter="Registration" title="Registration">Registration</a>
						</li>
						<li>
							<a class="themelink" data-filter="Technical" title="Technical">Technical</a>
						</li>
						<li>
							<a class="themelink" data-filter="Venues" title="Venues">Venues</a>
						</li>
					</ul>
					
					<!-- <a class="themelink session_expand_all do_expand themeborder" id="session_expand_all">Expand All +</a> -->
			
		</div>
		
		<div class="sidebar right-sidebar left-align">
		
		<ul class="scheduleday_wrapper themeborder no-list-style">
			{{#each ./Sessions}}
			
			{{#if TrackDescription.length}}
			<li class="themeborder individual-session accordion-panel" data-track="{{TrackDescription}}">
				
				<div class="session_content_wrapper expandable accordion">
					<div class="session_content ">
						<!-- <div class="session_start_time">{{prettyTimeMeridian StartDateTime}}</div> -->
						<div class="session_title">
							<h6>{{Title}}</h6>
						</div>
					<!-- <div class="session_excerpt">{{SessionDetails}}</div> -->
					<!-- <div class="session_title_list"><span class="ti-bookmark"></span>
						 	<div class="session_title_item">{{TrackDescription}}</div>
						 	<div class="session_speakers">By {{FirstName}}</div>
						 </div> -->
					</div>
					<!--<br class="clear" />-->
				</div>
				<div class="session_content_extend hide session_content_wrapper panel">
					<div class="session_content ">
						<!-- <div class="session_start_time">{{prettyTimeMeridian StartDateTime}} to {{prettyTime EndDateTime}}</div> -->
						<div class="session_excerpt">{{SessionDetails}}</div>

						<div class="session_title_list">
							<span class="ti-bookmark"></span>
							<div class="session_title_item">{{TrackDescription}}</div>
						</div>
					</div>
				</div>

			</li>
			{{else}}
			
				<li class="themeborder individual-session accordion-panel no-sessions" style="color: #ff2d55; margin: auto; text-align: center;"><h3>No sessions yet but check back soon.</h3></li>
			
			{{/if}}
			{{/each}}
		</ul>
		
	</div>
	
	

<script type='text/javascript'>

	$(document).ready(function($) {
		$('.accordion').on('click', function() {
			$parent_box = $(this).closest('.accordion-panel');
            //$parent_box.siblings().find('.panel').slideUp(500);
            $parent_box.siblings().find('.icon').removeClass('down');
            $parent_box.find('.panel').slideToggle(500);
            $parent_box.find('.icon').toggleClass('down');
        });

		$('ul.scheduleday_wrapper li .session_content_wrapper').on('click', function(ev) {
			    ev.preventDefault();
			    jQuery(this).next().toggleClass('hide');
		});

		jQuery(".no-sessions").hide();

		$(".session_filters a").on('touchstart click', function(){

			jQuery(".session_filters a").removeClass("active");
			jQuery(this).addClass("active");
			currentSessionType=jQuery(this).attr("data-filter");
			individualSession = jQuery('.individual-session').attr("data-track");
			jQuery(".individual-session").hide();
			jQuery(".no-sessions").hide();
			jQuery(".individual-session[data-track='"+currentSessionType+"'").show();
			jQuery(".individual-session[data-track='All'").show();
			if(currentSessionType == 'All'){
				jQuery(".individual-session").show();
			}
			if($('.scheduleday_wrapper').children(':visible').length == 0){
				jQuery(".no-sessions").show();
			}
			else{
				jQuery(".no-sessions").hide();
			}

		});

	});

// jQuery('#session_expand_all').click(function()
// 	{jQuery('.session_content_wrapper').slideDown();
// });
</script>
