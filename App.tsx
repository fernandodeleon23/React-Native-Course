import { SafeAreaView } from "react-native"
import { PaperProvider } from "react-native-paper";
import IonIcon from 'react-native-vector-icons/Ionicons';

import { HelloWorldScreen, CounterScreen, CounterM3Screen, BoxObjectModelScreen, DimensionScreen, PositionScreen } from './src/presentation/screens';
import { FlexScreen } from './src/presentation/screens/FlexScreen';
import { FlexDirectionScreen } from "./src/presentation/screens/FlexDirectionScreen";
import { HomeworkScreen } from "./src/presentation/screens/HomeworkScreen";

export const App = () => {
    return (

        <SafeAreaView style={{ flex: 1 }}>
            {/* <HelloWorldScreen name="Fernando De León"></HelloWorldScreen> */}
            
            <PaperProvider
                settings={{
                    icon: (props)=> <IonIcon { ...props }></IonIcon>
                }}
            >
                {/* <CounterScreen></CounterScreen> */}
                {/* <CounterM3Screen></CounterM3Screen> */}
                {/* <BoxObjectModelScreen></BoxObjectModelScreen> */}
                {/* <DimensionScreen></DimensionScreen> */}
                {/* <PositionScreen/> */}
                {/* <FlexScreen/> */}
                {/* <FlexDirectionScreen/> */}
                <HomeworkScreen/>
            </PaperProvider>
        </SafeAreaView>

    )    
}