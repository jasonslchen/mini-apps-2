/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import axios from 'axios';

const App = (props) => {
  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((data) => {
        console.log(data);
      });
  });
  return (
    <div>
      <div>Coin Desk App</div>
      <div>Powered by <a href="https://www.coindesk.com/price/bitcoin">CoinDes</a>k</div>
    </div>

  );
};


export default App;
