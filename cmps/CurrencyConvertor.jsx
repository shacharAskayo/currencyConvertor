
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native'
import currencyConvertorStyle from '../assets/styles/currencyConvertorStyle';
import currencyConvertorService from '../services/currencyConvertorService';
import ConvertorInput from './ConvertorInput';
import ConvertorOutput from './ConvertorOutput';
import FavoritesList from './favorite/FavoritesList';
import MiddleWareCurrency from './middleWare/MiddleWareCurrency';

export default function CurrencyConvertor() {

  const [inputAmount, setInputAmount] = useState(100)
  const [output, setOutput] = useState(0)
  const [inputCurrency, setInputCurrency] = useState('ILS')
  const [outputCurrency, setOutputCurrency] = useState('PHP')
  const [favoritesKeys, setFavoritesKeys] = useState(['USD', 'THB'])
  const [fullFavorites, setFullFavorites] = useState([])

  useEffect(async () =>
    setOutput(await currencyConvertorService.getCalculatedAmmount(inputCurrency, outputCurrency, inputAmount))
    , [inputCurrency, outputCurrency, inputAmount]
  )

  useEffect(async () => {
    setFullFavorites(await currencyConvertorService.getFavorites(inputCurrency, favoritesKeys, inputAmount))
  }, [inputAmount, inputCurrency, favoritesKeys])

  const onToggleFavorite = () => {
    const favoritesKeysCopy = [...favoritesKeys]
    if (favoritesKeys.includes(outputCurrency)) {
      const outputCurrencyIdx = favoritesKeys.findIndex(fav => fav === outputCurrency)
      favoritesKeysCopy.splice(outputCurrencyIdx, 1)
      setFavoritesKeys(favoritesKeysCopy)
    } else setFavoritesKeys([outputCurrency,...favoritesKeysCopy])
  }

  return (
    <View style={currencyConvertorStyle.container}>
      <Text style={currencyConvertorStyle.mainTitle} >Check out our rates</Text>
      <ConvertorInput inputAmount={inputAmount} setInputAmount={setInputAmount} inputCurrency={inputCurrency} setInputCurrency={setInputCurrency} />
      {output.middleWare && <MiddleWareCurrency middleWare={output.middleWare} />}
      <ConvertorOutput output={output} outputCurrency={outputCurrency} setOutputCurrency={setOutputCurrency} />
      <FavoritesList favoirtes={fullFavorites} onToggleFavorite={onToggleFavorite} />
    </View>
  );
}