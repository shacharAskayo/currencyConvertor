import React from 'react'
import { Text, View } from 'react-native'
import middlewareStyle from '../../assets/styles/middlewareStyle'

export default function MiddleWareStatement({ middleWare }) {
    return (
        <View style={middlewareStyle['middleware-statement-container-wrraper']}>
            <View style={middlewareStyle['middleware-statement-container']}>
                <View style={middlewareStyle.line}></View>
                <View style={middlewareStyle['middleware-statement']} >
                    <Text>Using <Text style={middlewareStyle['currency-name']}> {middleWare} </Text> as a middleware</Text>
                </View>
            </View>
        </View>
    )
}
