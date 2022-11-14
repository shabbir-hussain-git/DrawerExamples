
import { Text ,StyleSheet,View,Button} from "react-native"
import { useFocusEffect,useIsFocused } from '@react-navigation/native';
import React,{useState} from 'react'
import { useNavigation } from "@react-navigation/native";
import SCREEN_NAME from "../../Util/constant";


const ESG = ()=>{


    useFocusEffect(
        React.useCallback(() => {
          
         

            const unsubscribe = ()=>{
                //  clearInterval(interval);
            }
            return () => unsubscribe();

        }, [])
      );
    
      const getPortfolioData = async ()=>{
       
       
    }
 
    const navigation   = useNavigation();

    const change2 = ()=>{
        // STATE.portfolioTime.mutate = true;
        // dispatch(mutateData());
        navigation.navigate(SCREEN_NAME.alerts)
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.textStyle}>ESG Screen</Text>
                <Button title="Click Me" onPress={getPortfolioData}/>
                <Button onPress={change2} title="Go Alerts"/>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    },
    textStyle:{
        color:"white"
    }
})
export default ESG;