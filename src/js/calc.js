export default function calcRate(input, exArray, EX1, EX2) {


  let exValue = (input * exArray[EX2] / exArray[EX1]).toFixed(2);





  console.log(exValue);
  return exValue;
}