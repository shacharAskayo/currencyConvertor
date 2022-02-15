import { View, Picker } from "react-native";
import currencySelectStyle from '../assets/styles/currencySelectStyle';

export default function CurrencySelect({ countriesLabelsList, currency, setCurrency }) {
    return (
        <View style={currencySelectStyle[['dropdown-container']]} >
            <Picker
                style={currencySelectStyle.picker}
                selectedValue={currency}
                onValueChange={(itemValue) => setCurrency(itemValue)}
            >
                {countriesLabelsList.map(label => <Picker.Item key={label.currency} label={label.currency} value={label.currency} />)}
            </Picker>
        </View>
    )
}
