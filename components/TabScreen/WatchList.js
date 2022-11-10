import { Text ,StyleSheet,View} from "react-native"




const WatchList = ()=>{
 
    return (
        <>
         <View style={styles.container}>
            <Text style={styles.textStyle}>WatchList Screen</Text>
         </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
    },
    textStyle:{
        color:"white"
    }
})
export default WatchList;