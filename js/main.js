
App = {
	init: function() {
		var endpoint = 'https://jawbone.com/nudge/api/v.1.1/users/@me';
		$.ajax({
			url: endpoint,
			method: 'GET',
			headers: {
	          'Accept': 'application/json',
	          'Authorization': 'Bearer b6_3pfGGwEi3Q2vrLdoIRfFK59dIENPZEcqJqnkeCcki7I-52Pt9BQwPL5RD418q8EvaJSumcI0GoYT-V9UbpVECdgRlo_GULMgGZS0EumxrKbZFiOmnmAPChBPDZ5JP',
	        },
			success: function(data) {
				console.log('data success', data);
			},
			error: function(response) {
				console.log('data error', response);
			}
		});

	}
}

