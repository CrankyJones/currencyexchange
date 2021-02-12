import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExService from './js/exchange-service';


async function currConv() {
  let exValue = 0;
  let input = $("input").val();
  // invalid input
  let EX1 = $("#exRateOne").val();
  let EX2 = $("#exRateTwo").val();
  let exArray = await ExService.currencyCall(EX1);
  if (exArray.result) {
    exValue = Math.float(input * exArray.${ EX2 } * 100 / 100).toFixed(2)
  }
}


$(document).ready(function () {
  $("#exchangeButton").click(function () {

  })
})