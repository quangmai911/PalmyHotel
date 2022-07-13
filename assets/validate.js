/* <![CDATA[ */
// Jquery validate review hotel
jQuery(document).ready(function(){

	$('#review_hotel').submit(function(){

		var action = $(this).attr('action');

		$("#message-review").slideUp(750,function() {
		$('#message-review').hide();
		
		$('#submit-review')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');

		$.post(action, {
			hotel_name: $('#hotel_name').val(),
			name_review: $('#name_review').val(),
			lastname_review: $('#lastname_review').val(),
			email_review: $('#email_review').val(),
			room_type_review: $('#room_type_review').val(),
			cleanliness_review: $('#cleanliness_review').val(),
			comfort_review: $('#comfort_review').val(),
			price_review: $('#price_review').val(),
			quality_review: $('#quality_review').val(),
			review_text: $('#review_text').val(),
			verify_review: $('#verify_review').val()
		},
		
			function(data){
				document.getElementById('message-review').innerHTML = data;
				$('#message-review').slideDown('slow');
				$('#review_hotel .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-review').removeAttr('disabled');
				if(data.match('success') != null) $('#review_hotel').slideUp('slow');

			}
		);

		});

		return false;

	});

});
  /* ]]> */