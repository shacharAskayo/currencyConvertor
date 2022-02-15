import axios from 'axios'
const baseUrl = 'http://10.0.2.2:3030/api/rate'
const memorizedRates = []

export default {
    getCalculatedAmmount,
    getFavorites
}

async function getCalculatedAmmount(inputCurrency, outputCurrency, inputAmount) {
    const memorizedCalculation = _checkMemorizedRates(inputCurrency, outputCurrency, inputAmount)
    if (memorizedCalculation) return memorizedCalculation
    else {
        try {
            const { data } = await axios.get(baseUrl + `?input=${inputCurrency}&output=${outputCurrency}&amount=${inputAmount}`)
            const dataKey = Object.keys(data)[0]
            const dataValue = Object.values(data)[0]
            const calcRate = (dataValue / inputAmount).toFixed(2)
            const fullConvertCurrencyObj = { amount: Object.values(data)[0] }
            dataKey !== inputCurrency ? fullConvertCurrencyObj.middleWare = dataKey : null
            memorizedRates.push({ inputCurrency, outputCurrency, middleWare: fullConvertCurrencyObj.middleWare, calcRate })
            return fullConvertCurrencyObj
        } catch (err) { console.log('error in getRate fucntion', err) }
    }
}

async function getFavorites(inputCurrency, favs, amount) {
    const fullFavs = favs.map(async fav => {
        return { fav, res: await getCalculatedAmmount(inputCurrency, fav, amount) }
    })
    const resolvedFavorties = await Promise.all(fullFavs)
    return resolvedFavorties
}

function _checkMemorizedRates(inputCurrency, outputCurrency, amount) {
    const foundedMemorizeRate = memorizedRates.find(memorizedRate => memorizedRate.inputCurrency === inputCurrency && memorizedRate.outputCurrency === outputCurrency)
    if (foundedMemorizeRate) return { amount: (amount * foundedMemorizeRate.calcRate).toFixed(2), middleWare: foundedMemorizeRate.middleWare }
}