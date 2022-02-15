import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import favoritesStyles from '../../assets/styles/favoritesStyles'
import MiddleWareBtn from '../middleWare/MiddleWareBtn'
import MiddleWareStatement from '../middleWare/MiddleWareStatement'
import ILS from '../../assets/imgs/ILS.png'
import EUR from '../../assets/imgs/EUR.png'
import GBP from '../../assets/imgs/GBP.png'
import PHP from '../../assets/imgs/PHP.png'
import NPR from '../../assets/imgs/NPR.png'
import LKR from '../../assets/imgs/LKR.png'
import INR from '../../assets/imgs/INR.png'
import CNY from '../../assets/imgs/CNY.png'
import THB from '../../assets/imgs/THB.png'
import GHS from '../../assets/imgs/GHS.png'
import KES from '../../assets/imgs/KES.png'
import USD from '../../assets/imgs/USD.png'
import ZAR from '../../assets/imgs/ZAR.png'

const iconsLabels = { ILS, EUR, GBP, PHP, NPR, LKR, INR, CNY, THB, GHS, KES, USD, ZAR }

export default function FavoritePreview({ favorite }) {
  const [isMiddleWareOpen, setIsMiddleWareOpen] = useState(false)
  return (
    <View style={{ marginBottom: 35 }}>
      <View style={favoritesStyles['preview-and-middleware-container']}>
        <View style={favoritesStyles['preview-container']} >
          <Image
            style={favoritesStyles.img}
            source={iconsLabels[favorite.fav]}
          />
          <Text style={{ color: 'black', fontSize: 18, marginRight: 10 }}>{favorite.fav}  -</Text>
          <Text style={{ color: 'purple', fontSize: 18 }}>{favorite.res.amount}</Text>
        </View>
        {favorite.res.middleWare && <MiddleWareBtn isMiddleWareOpen={isMiddleWareOpen} setIsMiddleWareOpen={setIsMiddleWareOpen} />}
      </View>
      {isMiddleWareOpen && favorite.res.middleWare && <MiddleWareStatement middleWare={favorite.res.middleWare} />}
    </View>
  )
}
