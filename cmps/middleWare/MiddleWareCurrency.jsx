import React, { useState } from 'react'
import {  View } from 'react-native'
import middlewareStyle from '../../assets/styles/middlewareStyle'
import MiddleWareBtn from './MiddleWareBtn'
import MiddleWareStatement from './MiddleWareStatement'

export default function MiddleWareCurrency({ middleWare }) {

    const [isMiddleWareOpen, setIsMiddleWareOpen] = useState(false)
    return (
        <View style={middlewareStyle.container}>
           <MiddleWareBtn isMiddleWareOpen={isMiddleWareOpen} setIsMiddleWareOpen={setIsMiddleWareOpen}/>
            {isMiddleWareOpen && <MiddleWareStatement middleWare={middleWare}/>}
        </View>
    )
}

