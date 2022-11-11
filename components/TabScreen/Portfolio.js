import React,{ useState } from "react"
import { Text ,StyleSheet,View ,Button, Alert} from "react-native"
import { useFocusEffect,useIsFocused } from '@react-navigation/native';

import Util from "../../Util/Util"
import STATE from "../../Util/STATE";
import PortfolioFragment from "./PFolder/PortfolioFragment";
import Recent from "./PFolder/Recent";
import {loadPortfolioData} from '../../store/portfolio-slice'
import { useDispatch,useSelector } from "react-redux";
import { store } from "../../store/store";

const Portfolio = ()=>{

    const [change,changeHandler] = useState(new Date());
    const porfolioState = useSelector(store=>store.portfolioSlice);
    const dispatch = useDispatch();

    useFocusEffect(
        React.useCallback(() => {
            
            // const interval = setInterval(() => {
            //     console.log('---->hahah')
            //     getPortfolioData();
            // }, 4000);
            console.log('---->1')
            // checkLoading();
            getPortfolioData();

            const unsubscribe = ()=>{
                //  clearInterval(interval);
            }
            return () => unsubscribe();

        }, [])
      );
    
    const checkLoading = ()=>{
        console.log('----',porfolioState.loading,'-----');
        if(!porfolioState.loading && Util.toLoadData('portfolioTime')){
            Alert.alert('Loading');
            changeHandler(new Date())
        }
    }
    const getPortfolioData = async ()=>{   
        // Alert.alert('Loading');
        console.log('Portfolio This will run every 10 second!'); 
        console.log('----',porfolioState,'-----');
        dispatch(loadPortfolioData(porfolioState || {}))
    }
    if(porfolioState.loading){
        return (
            <View style={styles.container}>
                 <Text style={styles.textStyle}>Loading</Text>
            </View>
        )
    }
    
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Portfolio Screen</Text>
                <Button title="Click Me" onPress={getPortfolioData}/>
                <PortfolioFragment change={change}></PortfolioFragment>
                <Recent change={change}></Recent>
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
export default Portfolio;