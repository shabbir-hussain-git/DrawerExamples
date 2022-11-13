import React,{ useEffect, useState } from "react"
import { Text ,StyleSheet,View ,Button, Alert} from "react-native"
import { useFocusEffect,useIsFocused } from '@react-navigation/native';

import Util from "../../Util/Util"
import STATE from "../../Util/STATE";
import PortfolioFragment from "./PFolder/PortfolioFragment";
import Recent from "./PFolder/Recent";
import {loadPortfolioData,unMutate,mutateData} from '../../store/portfolio-slice'
import { useDispatch,useSelector } from "react-redux";
import { store } from "../../store/store";
import portfolioFetch from "../../datafetching/portfolioFetch";
import useSWR, { useSWRConfig } from 'swr'

const Portfolio = ()=>{

    const { mutate } = useSWRConfig()

    console.log(new Date().toString(),' --->1.1')
    const focused = useIsFocused();
    const [change,changeHandler] = useState(new Date());
    const porfolioState = useSelector(store=>store.portfolioSlice);
    const dispatch = useDispatch();

    const { user, isLoading, isError } = portfolioFetch('services/portfolio/myPortfolio',focused)

    console.log('--->1.2')

    useFocusEffect(
        React.useCallback(() => {
            
            // const interval = setInterval(() => {
            //     console.log('---->hahah')
            //     getPortfolioData();
            // }, 4000);
            // checkLoading();
            // getPortfolioData();

            const unsubscribe = ()=>{
                //  clearInterval(interval);
            }
            return () => unsubscribe();

        }, [])
      );

      console.log('--89--')
      console.log(porfolioState.mutate);
      console.log('--99--')
    useEffect(()=>{
       
        Alert.alert('Mutate start')
       
        if(porfolioState.mutate){
            changeMutate();
            dispatch(unMutate())
        }
    },[porfolioState.mutate])
    
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
        console.log('----',STATE['portfolioTime'],'-----');
        dispatch(loadPortfolioData(STATE['portfolioTime']))
    }
    const changeMutate = ()=>{
        mutate("http://10.0.2.2:4000/services/portfolio/myPortfolio");
    }
    const changeMutateNew = ()=>{
        dispatch(mutateData())
    }
    if(isLoading){
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
                <Button onPress={changeMutateNew} title="Mutate"/>
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