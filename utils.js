const getNames = function (url) {
	return new Promise((resolve, reject) => {
		const lib = url.startsWith('https') ? require('https') : require('http');
		const request = lib.get(url, (r) => {
			if(r. statusCaode < 200 || r.statusCode > 299) {
				reject(new Error(`Failed to load page, status code ${r.statusCode}`));	
			}
			const body = [];

			r.on('data', (chunk) => body.push(chunk.toString()));
			r.on('end', () => resolve(JSON.parse(body.join(' '))));	
		});

		request.on('error', (err) => reject(err));	
	});
}

module.exports = { getNames: getNames };