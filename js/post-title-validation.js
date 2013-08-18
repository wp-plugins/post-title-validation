jQuery(document).ready(function() {
	// publish button validation
	jQuery('#publish').click(function(){
		if(jQuery('#title').val().length == 0 && jQuery('#title').val() != " "){
			alert('Please insert title');
			jQuery('.spinner').css("visibility", "hidden");
			jQuery('#title').focus();
			return false;
		}
	});
	// draft button validation
	jQuery('#save-post').click(function(){
		if(jQuery('#title').val().length == 0 && jQuery('#title').val() != " "){
			alert('Please insert title');
			jQuery('.spinner').css("visibility", "hidden");
			jQuery('#title').focus();
			return false;
		}
	});
});