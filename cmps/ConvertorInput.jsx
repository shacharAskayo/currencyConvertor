import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import CurrencySelect from './CurrencySelect';
import { mainCountriesLabels } from '../utils/countries'
import convertorInputStyle from '../assets/styles/convertorInputStyle';

export default function ConvertorInput({ inputAmount, setInputAmount, inputCurrency, setInputCurrency }) {
    return (
        <View>
            <Text>When you send</Text>
            <View style={convertorInputStyle.inputAndSelect}>
                <View style={convertorInputStyle.borderBottom}>
                    <TextInput
                    style={convertorInputStyle.input}
                        onChangeText={setInputAmount}
                        value={inputAmount.toString()}
                        placeholder="enter amount"
                        keyboardType="numeric"
                    />
                </View>
                <View style={convertorInputStyle.borderBottom}>
                    <CurrencySelect countriesLabelsList={mainCountriesLabels} currency={inputCurrency} setCurrency={setInputCurrency} />
                </View>
            </View>
        </View>
    )
}


