//Declarando variáveis
const clc = require('cli-color');
const yellow = clc.yellow;
const green = clc.green;
const red = clc.red;
const blue = clc.blue;

let history = [];
const time = 30000; //30s //in milisseconds
const timeR = 15 //15m ::: tempo em minutos

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

function getCor(price) {
	if(price < history[history.length - 1]) {
		price = red(price);

		return price;
	}

	if(price > history[history.length - 1]) {
		price = green(price);

		return price;
	}

	if(history == []) {
		return price;
	}
}

function apagarArray() {
	history.splice(0,1);

	//for debug:
	console.log(history);
}

function registrador(price) {
	if(price != history[history.length - 1]) {
		history.push(price);

		setTimeout(apagarArray, timeR * 60000)
		
		//for debug:
		console.log(history);
	}
}

function imprimeData(data) {
	const welcome = "Você está observando o mercado: " + data[0].market;
	console.log(welcome);

	let ultimo = data[0].last;
	let low = data[0].low;
	let high = data[0].high;
	let bestBuy = data[0].buy;
	let bestSell = data[0].sell;
	let timestamp = data[0].timestamp;

	setTimeout(() => {
			ultimo = parseFloat(ultimo).toFixed(2);
			registrador(ultimo);
		},
			time);

	ultimo = parseFloat(ultimo).toFixed(2);
	ultimo = getCor(ultimo);
	console.log(ultimo);

	console.log("\nÚltimo preço registrado: " + ultimo);
	console.log();

}

function main() {
	console.log('\nBem-vind@\n\nprograma iniciado...');

	let data = getBTC();
	imprimeData(data);

	return;
}

main();
