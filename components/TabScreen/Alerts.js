
import { Text ,StyleSheet,View,Button} from "react-native"
import { useDispatch } from "react-redux"
import {mutateData} from '../../store/portfolio-slice';
import STATE from "../../Util/STATE";

const Alerts = ()=>{
    const dispatch = useDispatch();


    const change = ()=>{
        STATE.portfolioTime.mutate = true;
        // dispatch(mutateData());
    }

    const change2 = ()=>{
        // STATE.portfolioTime.mutate = true;
        // dispatch(mutateData());
        // navigation.navigate(SCREEN_NAME.alerts)
    }
    return (
        <>
            <View style={styles.container}>
                <Text>Preference Screen</Text>
                <Button onPress={change} title="Mutate"/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
    }
})
export default Alerts;