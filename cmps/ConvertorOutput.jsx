import React from 'react';
import { Text, View } from 'react-native';
import convertorInputStyle from '../assets/styles/convertorInputStyle';
import { secondariesCountriesLabels } from '../utils/countries';
import CurrencySelect from './CurrencySelect';

export default function ConvertorOutput({ output, outputCurrency, setOutputCurrency }) {
  return <View>
    <Text>They'll receive</Text>
    <View style={convertorInputStyle.inputAndSelect}>
      <View style={convertorInputStyle.borderBottom}>
        <Text style={convertorInputStyle.output} >{output.amount}</Text>
      </View>
      <View style={convertorInputStyle.borderBottom}>
        <CurrencySelect countriesLabelsList={secondariesCountriesLabels} currency={outputCurrency} setCurrency={setOutputCurrency} />
      </View>
    </View>
  </View>
}
