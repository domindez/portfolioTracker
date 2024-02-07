import yahooFinance from 'yahoo-finance2';

const Ticker = 'TSLA'

const fetchStockData = async () => {
  try {
    const quote = await yahooFinance.quote(Ticker);
    console.log(`${Ticker} -`, quote.regularMarketPrice);
  } catch (error) {
    console.error('Error: ', error);
  }
}

fetchStockData();
