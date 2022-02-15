import { StyleSheet, Text, View } from "react-native";
import appStyle from "./assets/styles/appStyle";
import CurrencyConvertor from "./cmps/CurrencyConvertor";

export default function App() {

  return (
  <View style={appStyle.container}>
    <CurrencyConvertor/>
  </View>
  
  )
}




