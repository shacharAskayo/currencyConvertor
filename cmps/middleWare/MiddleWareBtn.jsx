import React from 'react'
import { Text, View } from 'react-native'
import middlewareStyle from '../../assets/styles/middlewareStyle'

export default function MiddleWareBtn({isMiddleWareOpen,setIsMiddleWareOpen}) {
    return (
        <View style={middlewareStyle.circle} onStartShouldSetResponder={() => setIsMiddleWareOpen(!isMiddleWareOpen)} >
            <Text style={isMiddleWareOpen ? middlewareStyle.open : middlewareStyle.close} >
                {'>'}
            </Text>
        </View>
    )
}
