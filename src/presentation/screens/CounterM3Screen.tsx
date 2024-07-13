import { useState } from "react"
import { Text, View } from "react-native"
import { FAB } from "react-native-paper";
import { globalStyles } from "../themes/global.styles";

export const CounterM3Screen = () => {

    const [count, setCount] = useState(10);

    return (

        <View style={globalStyles.centerContainer}>
            
            <Text style={globalStyles.title}>{count}</Text>

            <FAB
                label="Botón"
                style={globalStyles.fab}
                onPress={() => setCount( count +1 )}
                onLongPress={() => setCount( 0 )}
                icon="add"
            />
        </View>
    )
}