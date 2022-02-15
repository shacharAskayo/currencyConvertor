import React from 'react'
import {  FlatList, Pressable, Text, View } from 'react-native'
import currencyConvertorStyle from '../../assets/styles/currencyConvertorStyle'
import favoritesStyles from '../../assets/styles/favoritesStyles'
import FavoritePreview from './FavoritePreview'

export default function FavoritesList({ favoirtes, onToggleFavorite }) {
    return (
        <View style={{height:'100%'}} >
            <View style={favoritesStyles['btn-container']}>
                <Pressable style={favoritesStyles.btn} onPress={onToggleFavorite}>
                    <Text style={favoritesStyles['btn-contant']}> Toggle favorite</Text>
                </Pressable>
            </View>
            <Text style={currencyConvertorStyle.mainTitle}>Favorites</Text>
            <View style={favoritesStyles['list-container']}>
                <FlatList
                    data={favoirtes}
                    renderItem={({ item }) => <FavoritePreview key={item} favorite={item} />}
                />
            </View>
        </View>
    )
}
