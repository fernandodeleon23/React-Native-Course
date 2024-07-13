
import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export const DimensionScreen = () => {

    const { width, height } = useWindowDimensions()

    return (
        <View>

            <View style={style.container}>

                <View style={{
                    ...style.purpleBox,
                    width: width * 0.6
                }} />
            </View>

            <Text style={style.title}>w: {width} </Text>
            <Text style={style.title}>h: {height} </Text>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        width: 300,
        height: 200,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    },
    title: {
        fontSize: 25,
        marginTop:25,
        textAlign: 'center'
    }

})
