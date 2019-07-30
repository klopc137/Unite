{{#each ./Sessions}}
<div class="accordion-panel">
	<a href="javascript:void(0);" class="accordion"><span class="icon"></span><p>{{Title}}</p></a>
	<div class="panel">
		<div class="sessionDateTime">{{prettyDate StartDateTime}} </div>
		<div class="sessionTime">{{prettyTime StartDateTime}} <span class="timeMeridian">{{prettyTimeMeridian StartDateTime}} to {{prettyTime EndDateTime}}</span> <span class="timeMeridian">{{prettyTimeMeridian EndDateTime}}</span></div>
		<div class="sessionSpace">{{Location}}</div>
		<div>{{#each Notes}}<div class="sessionDescription">{{{NoteHtml}}}</div>{{/each}}</div>
		
	</div>
</div>			
{{/each}}

<script type='text/javascript'>
	$(document).ready(function($) {
		$('.accordion').on('click', function() {
			$parent_box = $(this).closest('.accordion-panel');
			//$parent_box.siblings().find('.panel').slideUp(500);
			//$parent_box.siblings().find('.icon').removeClass('down');
			$parent_box.find('.panel').slideToggle(500);
			$parent_box.find('.icon').toggleClass('down');
		});
	});
</script>
