export default class ExService {
  static async currencyCall(baseCurrency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/?`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}