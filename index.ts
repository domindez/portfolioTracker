import yahooFinance from 'yahoo-finance2';


const fetchStockData = async () => {
  try {
    const quote = await yahooFinance.quote('AAPL');
    console.log('AAPL -', quote.regularMarketPrice);
  } catch (error) {
    console.error('Error: ', error);
  }
}

fetchStockData();
