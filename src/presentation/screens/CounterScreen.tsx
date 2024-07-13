import { useState } from "react"
import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from '../components/shared';
import { Button } from "react-native-paper";

export const CounterScreen = () => {

    const [ count, setCount ] = useState( 10 );

    return (

        <View style={ styles.container }>

            <Text style={ styles.title }>
                { count }
            </Text>
            
            <Button
                icon="camera"
                mode="contained"
                onPress={ () => setCount( count+1 ) }
                onLongPress={ () => setCount( 0 ) }
            >
                Incrementar
            </Button>

            {/* <PrimaryButton
                label='Incrementar'
                onPress={ () => setCount( count+1 ) }
                onLongPress={ () => setCount( 0 ) }
            ></PrimaryButton> */}
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize:80,
        fontWeight: '300'
    }
})
