import { StyleSheet, Text, View } from "react-native"

export const FlexDirectionScreen = () => {
    return (
        <View style={ styles.container }>

            <View style={[ styles.box, styles.box1 ]} />
            <View style={[ styles.box, styles.box2 ]} />
            <View style={[ styles.box, styles.box3 ]} />
            <View style={[ styles.box, styles.box1 ]} />
            <View style={[ styles.box, styles.box2 ]} />
            <View style={[ styles.box, styles.box3 ]} />
            <View style={[ styles.box, styles.box1 ]} />
            <View style={[ styles.box, styles.box2 ]} />
            <View style={[ styles.box, styles.box3 ]} />
            <View style={[ styles.box, styles.box1 ]} />
            <View style={[ styles.box, styles.box2 ]} />
            <View style={[ styles.box, styles.box3 ]} />


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'gray',
        flexDirection:'row',
        flexWrap:'wrap',
        gap:10
    },
    box:{
        width:'31.7%',
        height:100
    },
    box1:{
        backgroundColor: '#5856D6',
    },
    box2:{
        backgroundColor: '#2e2c8f'
    },
    box3:{
        backgroundColor: '#9897d6'
    }
})
