import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    centerContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        fontWeight:'300',
        color:'white'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: Platform.OS === 'android' ? 15 : 0
    }
})