import Config from "../config";
import { type Currency } from "../types/Currency";
import { currencies } from '../data/currencies';

const apiUrl = Config.API_URL;
const accessKey = Config.ACCESS_KEY;

 const getCurrencies = async () => {
  try {
    const response = await fetch(`${apiUrl}/symbols?access_key=${accessKey}`);
    const data = await response.json();
    const { symbols } = data;

    const results: Currency[] = [];

    Object.entries(symbols).forEach((symbol) => {
    
      const currency = currencies.find(c => c.currency.code === symbol[0]);
    
      if (currency) {
        const img = `data:image/png;base64,${currency.flag}`;
        
        results.push({
          code: symbol[0],
          name: currency.currency.name,
          symbol: currency.currency.symbol as string,    
          flag: img
        });
      }
    
    });
    return results;
  } catch (error) {
    console.error(error);
  }
};

const getRates = async () => {
  try {
    const response = await fetch(`${apiUrl}/latest?access_key=${accessKey}`);
    const data = await response.json();
    //Change timestamp to local timestamp for avoid timezone issues
    data.timestamp = Date.now();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getRates, getCurrencies } ;