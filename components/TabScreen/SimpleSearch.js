
import { Text ,StyleSheet,View} from "react-native"



const SimpleSearch = ()=>{
 
    return (
        <>
            <View style={styles.container}>
                <Text>SimpleSearch Screen</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
    }
})
export default SimpleSearch;