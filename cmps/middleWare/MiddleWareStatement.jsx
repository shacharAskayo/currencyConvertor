import React from 'react'
import { Text, View } from 'react-native'
import middlewareStyle from '../../assets/styles/middlewareStyle'

export default function MiddleWareStatement({middleWare}) {
    return (
        <View style={middlewareStyle['middleware-statement']} >
            <Text>Using <Text style={middlewareStyle['currency-name']}> {middleWare} </Text> as a middleware</Text>
        </View>
    )
}
