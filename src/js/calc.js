export default function calcRate(input, exArray, EX2) {
  let exValue = (input * exArray.conversion_rates[EX2]).toFixed(2);
  return exValue;
}