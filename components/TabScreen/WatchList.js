import React,{ useState } from "react"
import { Text ,StyleSheet,View ,Button, Alert} from "react-native"
import { useFocusEffect,useIsFocused } from '@react-navigation/native';

import Util from "../../Util/Util"
import STATE from "../../Util/STATE";





const WatchList = ()=>{
 
    useFocusEffect(
        React.useCallback(() => {
            
            // const interval = setInterval(() => {
            //     console.log('watchlist This will run every 10 second!');
            //     checkLoading();
            // }, STATE['watchlistTime'].threshold*1000);

            // checkLoading();
            const unsubscribe = ()=>{
                //  clearInterval(interval);
            }
            return () => unsubscribe();

        }, [])
      );
    
    const checkLoading = ()=>{
        if(Util.toLoadData('watchlistTime')){
            Alert.alert('Loading')
        }
    }
    const getPortfolioData = async ()=>{
       
        await Util.getData('services/portfolio/myPortfolio');
    }
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