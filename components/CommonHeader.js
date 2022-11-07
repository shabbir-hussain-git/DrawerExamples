import { Text,StyleSheet,Button, View } from "react-native"
import SCREEN_NAME from "../Util/constant"



const CommonHeader = (props)=>{

    const openPref = ()=>{
        close();
        props.onNavigate(SCREEN_NAME.pref)
    }
    const openAlert = ()=>{
        props.onNavigate(SCREEN_NAME.alerts)
    }
    const openESG = ()=>{
        props.onNavigate(SCREEN_NAME.esg)
    }
    const close = ()=>{
        props.onPress();
    }
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Button title="Close" onPress={close}></Button>
          </View>
          <View style={styles.content}>
            <View style={styles.view1}>
              <Button title="Preference" onPress={openPref}></Button>
              <Text></Text>
              <Button title="Alerts" onPress={openAlert}></Button>
              <Text></Text>
              <Button title="ESG" onPress={openESG}></Button>
            </View>
            <View style={styles.view2}></View>
          </View>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
    },
    header:{
        flex:1,
        backgroundColor:'green'
    },
    content:{
        flex:11,
        flexDirection:'row'
    },
    view1:{
        flex:3,
        backgroundColor:"#000000"
    },
    view2:{
        flex:1
    }
})
export default CommonHeader;