# Currency Exchanger

#### Converts over 150 currencies using a Currency Exchange API

#### By Geof Rosenmund   

## Technologies Used

* Webpack
* NPM
* JavaScript
* HTML
* CSS
* Bootstrap
* ExchangeRate API

## Description

This project uses an API to convert currency. The project calls an API and uses the received data to populate dropdown menus with currency codes. The user can then input an amount of money, select their starting currency, and then choose which currency they want to convert. Users can then click the button to use the data set from the first API call that was saved in sessionStorage to generate results underneath the input fields. Any errors with mismatched codes or a failed fetch will appear underneath the input fields as well.   

## Getting an API Key

* Head to [this site](https://www.exchangerate-api.com/) to sign up for a free key
* Click the "Get Free Key" button and follow the instructions

## Setup/Installation Requirements

* Clone repository to your desktop
* Move to top level of the directory in your terminal
* Create a .env file
* In .env write : API_KEY=[whatever the API key is you just received](do not include the brackets)
* Run [$ npm install] to recreate the environment
* Run [$ npm run build]
* Open dist/index.html in a browser or run [$ npm run start] in your terminal to create a dev server.
  * (Note: This code was written on a PC, so you will need to adjust the '&' to a ';' in the package.json->scripts->start if you are working on a MAC)

## Known Bugs

There are no known bugs at this time.

## License
[MIT](https://opensource.org/licenses/MIT)
Copyright (c) [2021] [Geof Rosenmund]

## Contact Information
Geof Rosenmund (geof.rosenmunds.email@gmail.com)
