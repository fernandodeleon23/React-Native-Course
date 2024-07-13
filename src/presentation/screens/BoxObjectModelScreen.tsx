import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (

        // <View style={ styles.container }>
        //     <Text style={ styles.title }>Holaaa</Text>
        // </View>

        <View style={ styles.purpleBox }>
            <Text>Esta es una caja púrpura</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red'
    },
    title:{
        fontSize: 30,
        color:'#fff',
        borderWidth:10
    },
    purpleBox:{
        paddingVertical:50,
        paddingHorizontal:15,
        backgroundColor:'purple'
    }
})