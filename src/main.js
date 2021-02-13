import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExService from './js/exchange-service';
import calcRate from './js/calc';

async function listPop() {
  let code = "USD";
  let exList = await ExService.currencyCall(code);
  if (exList.result === "success") {
    for (let i = 0; i < Object.keys(exList.conversion_rates).length; i++) {
      $("#exRateOne").append(`<option value= "${Object.keys(exList.conversion_rates)[i]}"> ${Object.keys(exList.conversion_rates)[i]}</option>`);
      $("#exRateTwo").append(`<option value= "${Object.keys(exList.conversion_rates)[i]}"> ${Object.keys(exList.conversion_rates)[i]}</option>`);
    }
    sessionStorage.setItem("exchangeRatesUSD", JSON.stringify(exList.conversion_rates));
    console.log(sessionStorage);
  } else {
    let wtf = "error-type";
    $('.errorMessage').append(`The page did not populate the lists correctly.<br>
    There was an error: ${exList[wtf]}.`);
    $('.errorMessage').show();
  }
}

async function currConv() {
  let exValue = 0;
  let input = $("input").val();
  if (input <= 0) {
    alert('Please put in a positive number greater than 0.');
    return;
  }
  let EX1 = $("#exRateOne").val();
  let EX2 = $("#exRateTwo").val();
  let exArray = JSON.parse(sessionStorage.getItem("exchangeRatesUSD"));
  // let exArray = await ExService.currencyCall(EX1);
  console.log(exArray);
  if (exArray.USD) {
    exValue = calcRate(input, exArray, EX1, EX2);
    $('.results').append(`You would have ${exValue} ${EX2} after the exchange.`);
    $('.results').show();

    // if (exArray.conversion_rates[EX1] && exArray.conversion_rates[EX2]) {
    //   exValue = calcRate(input, exArray, EX2);
    //   $('.results').append(`You would have ${exValue} ${EX2} after the exchange.`);
    //   $('.results').show();
    // } else {
    //   $('.errorMessage').append(`The exchange did not go through.<br>
    //   There was an error: Codes did not match data`);
    //   $('.errorMessage').show();
    // }
  } else {
    $('.errorMessage').append(`The exchange did not go through.<br>
    There was an error: ${exArray.message}`);
    $('.errorMessage').show();
  }
}


window.onload = function () {
  listPop();
};

$(document).ready(function () {
  $('.results').hide();
  $('.errorMessage').hide();
  $("#exchangeButton").click(function () {
    $('.results').empty();
    $('.errorMessage').empty();
    currConv();
  });
});
