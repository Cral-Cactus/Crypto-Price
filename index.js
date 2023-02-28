const axios = require('axios');

const [,, coin, currency] = process.argv;

axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${coin.toUpperCase()}&tsyms=${currency.toUpperCase()}`)
  .then(response => {
    const price = response.data[currency.toUpperCase()];
    console.log(`Current ${coin.toUpperCase()} Price in ${currency.toUpperCase()}: ${price}`);
  })
  .catch(error => {
    console.log(`Error fetching data: ${error.message}`);
  });