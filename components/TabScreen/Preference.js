import { useNavigation } from "@react-navigation/native";
import { Text ,StyleSheet,View,Button} from "react-native"
import SCREEN_NAME from "../../Util/constant";



const Preference = ()=>{
 
    const navigation   = useNavigation();

    const change = ()=>{
        // STATE.portfolioTime.mutate = true;
        // dispatch(mutateData());
        navigation.navigate(SCREEN_NAME.esg)
    }
    return (
        <>
            <View style={styles.container}>
                <Text>Preference Screen</Text>
                <Button onPress={change} title="Go ESG"/>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
    }
})
export default Preference;