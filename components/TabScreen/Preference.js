import { Text ,StyleSheet,View} from "react-native"



const Preference = ()=>{
 
    return (
        <>
            <View style={styles.container}>
                <Text>Preference Screen</Text>
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