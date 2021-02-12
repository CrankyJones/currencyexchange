import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExService from './js/exchange-service';


async function currConv() {
  let EX1 = $("#exCurrency1").val();
  let EX2 = $("#exCurrency2").val();
  let exArray = await ExService.currencyCall(EX1);
  if (exArray.result) {

  }
}


$(document).ready(function () {
  $("#exchange").click(function () {

  })
})