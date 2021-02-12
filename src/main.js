import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExService from './js/exchange-service';

async function currConv() {
  let exValue = 0;
  let input = $("input").val();
  if (input <= 0) {
    alert('Please put in a positive number greater than 0.');
    return;
  }
  let EX1 = $("#exRateOne").val();
  let EX2 = $("#exRateTwo").val();
  let exArray = await ExService.currencyCall(EX1);
  console.log(exArray);
  if (exArray.result) {
    exValue = (input * exArray.conversion_rates[EX2]).toFixed(2);
    $('.results').append(`You would have ${exValue} ${EX2} after the exchange.`);
  } else {
    $('.errorMessage').append(`The exchange did not go through. There was an error: ${exArray.message}`);
  }
}


async function listPop() {
  let code = "USA";
  let exList = await ExService.currencyCall(code);
  for (let i = 0; i < exList.conversion_rates.length; i++) {
    $('#exRateOne').append(new Option(`${Object.keys(exList.conversion_rates[i])}`, `${Object.keys(exList.conversion_rates[i])}`));
    $('#exRateTwo').append(new Option(`${Object.keys(exList.conversion_rates[i])}`, `${Object.keys(exList.conversion_rates[i])}`));
  }
}



$(document).ready(function () {
  listPop();
  $("#exchangeButton").click(function () {
    $('.results').empty();
    $('.errorMessage').empty();
    currConv();
  });
});
