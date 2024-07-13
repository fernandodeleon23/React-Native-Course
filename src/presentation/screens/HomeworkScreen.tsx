import { StyleSheet, Text, View } from 'react-native'

export const HomeworkScreen = () => {
    return (

        <View style={ styles.container }>
            
            <View style={[ styles.box, styles.orangeBox ]}></View>
            <View style={[ styles.box, styles.purpleBox ]}></View>
            <View style={[ styles.box, styles.blueBox ]}></View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#28425C'
    },
    box:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white'
    },
    orangeBox:{
        backgroundColor: '#f0a23B'
    },
    purpleBox:{
        backgroundColor:'#5856D6',
        position:'relative',
        top:50
    },
    blueBox:{
        backgroundColor: '#28c4d9'
    },
})