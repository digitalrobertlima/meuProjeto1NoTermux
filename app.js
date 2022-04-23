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
	console.log('\nIniciando requisição na API da BitPreço...');

	const url = "https://api.bitpreco.com/btc-brl/";
	const ticker = url + "ticker";
	const book = url + "orderbook";
	const trades = url + "trades";

	let tickerData = getJSON(ticker);
	let lastPrice = tickerData.last;
	let timestamp = tickerData.timestamp;
	let low24H = tickerData.low;
	let high24H = tickerData.high;

	console.log(yellow('Resumo do mercado: '));
	console.log('\nÚltimo preço registrado: ' + parseFloat(lastPrice).toFixed(2));
	console.log(tickerData);
	let dados = getJSON(book);
	console.log('Tamanho: ' + dados.timestamp);
}

function main() {
	console.log('programa iniciado');

	getBTC();

	return
}

main();
