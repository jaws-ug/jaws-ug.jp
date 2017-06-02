(function($) {
	
	var $area = $('#area');
	if ( $area.length > 0 ) {
		var areahtml = '';

		$.ajax({
			url : 'https://script.google.com/macros/s/AKfycbyWfedLeQTgaGQjOgjYYzrwpUkoUjmU51Incm0lJW2IzNpiaoQ/exec?sheetName=area',
		})
		.done(function( data ) {
			areahtml += '<dl class="branch-list">' + "\n";
			$.each(data, function(i, obj ){
				// name
				areahtml += '<dt>' + obj.name + '</dt>' + "\n";
				areahtml += '<dd>' + "\n";
				// url
				if (obj.url.length > 0 ) {
				areahtml += '<a href="' + obj.url + '" class="usa-button"><i class="fa fa-ticket fa-inverse" aria-hidden="true"></i> イベント申込</a>' + "\n";
				}
				// facebook
				if (obj.facebook.length > 0 ) {
				areahtml += '<a href="' + obj.facebook + '" class="usa-button"><i class="fa fa-facebook-official fa-inverse" aria-hidden="true"></i> Facebook</a>' + "\n";
				}
				// twitter
				if (obj.twitter.length > 0 ) {
				areahtml += '<a href="' + obj.twitter + '" class="usa-button"><i class="fa fa-twitter fa-inverse" aria-hidden="true"></i> Twitter</a>' + "\n";
				}
				areahtml += '</dd>' + "\n";

				// other
				if (obj.other.length > 0 ) {
				areahtml += '<dd>' + obj.other + '</dd>' + "\n";
				}
			});
			areahtml += '</dl>' + "\n";
			$area.html(areahtml);
		});
	}

	var $list = $('#list');
	if ( $list.length > 0 ) {
		var listhtml = '';

		$.ajax({
			url : 'https://script.google.com/macros/s/AKfycbyWfedLeQTgaGQjOgjYYzrwpUkoUjmU51Incm0lJW2IzNpiaoQ/exec?sheetName=list',
		})
		.done(function( data ) {
			listhtml += '<dl class="branch-list">' + "\n";
			$.each(data, function(i, obj ){
				// name
				listhtml += '<dt>' + obj.name + '</dt>' + "\n";
				listhtml += '<dd>' + "\n";
				// url
				if (obj.url.length > 0 ) {
				listhtml += '<a href="' + obj.url + '" class="usa-button"><i class="fa fa-ticket fa-inverse" aria-hidden="true"></i> イベント申込</a>' + "\n";
				}
				// facebook
				if (obj.facebook.length > 0 ) {
				listhtml += '<a href="' + obj.facebook + '" class="usa-button"><i class="fa fa-facebook-official fa-inverse" aria-hidden="true"></i> Facebook</a>' + "\n";
				}
				// twitter
				if (obj.twitter.length > 0 ) {
				listhtml += '<a href="' + obj.twitter + '" class="usa-button"><i class="fa fa-twitter fa-inverse" aria-hidden="true"></i> Twitter</a>' + "\n";
				}
				listhtml += '</dd>' + "\n";

				// other
				if (obj.other.length > 0 ) {
				listhtml += '<dd>' + obj.other + '</dd>' + "\n";
				}
			});
			listhtml += '</dl>' + "\n";
			$list.html(listhtml);
		});
	}

})(jQuery);
