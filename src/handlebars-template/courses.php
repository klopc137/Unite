<div class="sessions">
	{{#each ./Sessions}}
		<div class="session">
			<div class="row sessionRow">
				<div class="columns col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<h2 class="sessionTitle"><span class="expanded fa fa-angle-down"></span><span class="collapsed fa fa-angle-right"></span><div>{{Title}}</div></h2>
					<div class="sessionDetails">
						<div class="sessionDateTime">{{prettyDate StartDateTime}} </div>
						<div class="sessionTime">{{prettyTime StartDateTime}} <span class="timeMeridian">{{prettyTimeMeridian StartDateTime}} to {{prettyTime EndDateTime}} <span class="timeMeridian">{{prettyTimeMeridian EndDateTime}}</div>
						<div class="sessionSpace">{{Location}}</div>
						<div>{{#each Notes}}<div class="sessionDescription">{{{NoteHtml}}}</div>{{/each}}</div>
						<div class="sessionStart noShow">{{StartDateTime}}</div>
						<div class="sessionEnd noShow">{{EndDateTime}}</div>
					</div>
				</div>
			</div>
		</div>
	{{/each}}
</div>
<!--
<script type='text/javascript'>
jQuery(".sessions .sessionTitle").click(function(){
	jQuery('.sessions .sessionDetails').css('display','block');
});
</script> -->
