import { Text ,StyleSheet,View, Pressable, Alert} from "react-native"
import { SwipeRow } from 'react-native-swipe-list-view';


const CardScreen = (props)=>{


    const deleteRow = ()=>{
        Alert.alert('Delete','Row Deleated-'+props.index)
    }
    return (
      <>
        <View style={styles.container}>
          <SwipeRow closeOnRowPress={true} rightOpenValue={-40} >
            <Pressable onPress={deleteRow}>
                <View style={styles.hiddenRowStyle} >
                    <Text style={styles.textStyle}>{props.index}</Text>
                </View>
            </Pressable>
            <View style={styles.visibleRowStyle} >
                <Text style={styles.textStyle}>{props.index}</Text>
            </View>
          </SwipeRow>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'green',
        height:150
    },
    textStyle:{
        color:"#ffffff"
    },
    hiddenRowStyle:{
        backgroundColor:'red'
    },
    visibleRowStyle:{
        backgroundColor:'yellow'

    }
})

export default CardScreen;