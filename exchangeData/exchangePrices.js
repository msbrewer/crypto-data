const ccxt = require ('ccxt');

const krakenPrices = (async function () {
    let kraken = new ccxt.kraken ()

    let markets = (await kraken.fetchTickers(symbols = undefined, params = {}))
        let krakenList = []
        for (item in markets) {
            krakenList.push(markets[String(item)].symbol + " : " + ((markets[String(item)].bid + markets[String(item)].ask)/2))
        }
        for (let i = 0; i < krakenList.length; i++) {
            console.log(krakenList[i])
        }
}) ();

module.exports = {
    krakenPrices,
}