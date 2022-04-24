//Declarando variáveis
const clc = require('cli-color');
const yellow = clc.yellow;
const green = clc.green;
const red = clc.red;
const blue = clc.blue;

function getJSON(api) {
	const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	const request = new XMLHttpRequest();

	request.open('GET', api, false);
	request.send();

	let response = JSON.parse(request.responseText);

	return response;
}

function getBTC() {
	console.log(green('\nIniciando requisição na API da BitPreço...'));

	const url = "https://api.bitpreco.com/btc-brl/";
	const ticker = url + "ticker";
	const book = url + "orderbook";
	const trades = url + "trades";

	let tickerData = getJSON(ticker);
	let bookData = getJSON(book);
	let tradesData = getJSON(trades);

	let data = [
		tickerData,
		bookData,
		tradesData
	];

	//for debug:
	//console.log(data[0].last);

	return data;
}

function imprimeData(data) {

}

function main() {
	console.log('\nBem-vind@\n\nprograma iniciado...');

	let data = getBTC();
	imprimeData(data);

	return;
}

main();
