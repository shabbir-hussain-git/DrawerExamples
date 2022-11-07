import { Text ,StyleSheet,View} from "react-native"




const WatchList = ()=>{
 
    return (
        <>
         <View style={styles.container}>
                <Text>WatchList Screen</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
    }
})
export default WatchList;