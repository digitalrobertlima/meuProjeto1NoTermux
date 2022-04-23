function getJSON(api) {
	const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	const request = new XMLHttpRequest();

	request.open('GET', api, false);
	request.send();

	let responseObj = JSON.parse(request.responseText);

	return response;
}

function main() {
	console.log('programa iniciado');

	getBTC();

	return
}
