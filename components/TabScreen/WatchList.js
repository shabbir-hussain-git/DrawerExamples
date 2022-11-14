import React,{ useState } from "react"
import { Text ,StyleSheet,View ,Button, Alert} from "react-native"

import Util from "../../Util/Util"
import STATE from "../../Util/STATE";

import { useFocusEffect,useIsFocused } from '@react-navigation/native';

import watchlistFetch from "../../datafetching/watchlistFetch";


const WatchList = ()=>{
 
    const focused = useIsFocused();
    const { user, isLoading, isError } = watchlistFetch(focused)

    useFocusEffect(
        React.useCallback(() => {
            
           const unsubscribe = ()=>{

            }
            return () => unsubscribe();

        }, [])
      );
    
      if (isLoading) {
        return (
          <View style={styles.container}>
            <Text style={styles.textStyle}>Loading</Text>
          </View>
        );
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