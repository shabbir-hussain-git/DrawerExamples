
import { Text ,StyleSheet,View,Button} from "react-native"
import { useDispatch } from "react-redux"
import {mutateData} from '../../store/portfolio-slice';

const Alerts = ()=>{
    const dispatch = useDispatch();


    const change = ()=>{
        dispatch(mutateData());
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