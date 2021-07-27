const ccxt = require ('ccxt');

/*
    {
        "XBTUSD" : {
            "kraken" : {
                "ask" : 00,
                "bid" : 00
            }
            "ascendex" {
                "ask" : 00.
                "bid" : 00
            }
            ...
        }
        "ETHUSD" : {
            "kraken" : {
                "ask" : 00,
                "bid" : 00
            }
            "ascendex" : [
                "ask" : 00,
                "bid" : 00
            ]
            ...
        }
        ...
    }
*/



const exchangesList = [
    "kraken"
]
console.log(exchangesList[0])

const exchangeFuncs = {
    "kraken" : new ccxt.kraken()
}

function dataPull(exchangesList, exchangeFuncs, i) {
    let exchangeName = exchangesList[i]
    let exchangeFunc = exchangeFuncs[exchangeName]
    let exchangeInfo = exchangeFunc.fetchTickers(symbols = undefined, params = {})            
}

function dataWrite(item, i){
    return {
        "ask": item.ask,   
        "bid": item.bid
    }
}



let markets = {}
for (let i = 0; i < exchangesList.length; i++)  {
    for (item in dataPull(exchangesList, exchangeFuncs, i)) {
        markets = {
            item.symbol : {
                exchangesList[i] : dataWrite(item, i)
            }
        }
    }
}

module.exports = {
    markets,
}
