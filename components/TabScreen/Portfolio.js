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

    console.log(new Date().toString(),' ---> Portfolio Start');
    const focused = useIsFocused();
    const [change,changeHandler] = useState(new Date());
    const porfolioState = useSelector(store=>store.portfolioSlice);
    const dispatch = useDispatch();

    const { user, isLoading, isError } = portfolioFetch(focused)

    console.log(porfolioState)

    useFocusEffect(
        React.useCallback(() => {
        
            if(STATE.portfolioTime.mutate){
                Alert.alert('Mutate start 1234');
                STATE.portfolioTime.mutate = false;
                changeMutate();
            }
            const unsubscribe = ()=>{

            }
            return () => unsubscribe();

        }, [])
      );

    useEffect(()=>{
       
       
        // if(porfolioState.mutate){
        //     Alert.alert('Mutate start 1234')
        //     changeMutate();
        //     dispatch(unMutate())
        // }
    },[porfolioState.mutate])
    
    const checkLoading = ()=>{
        if(!porfolioState.loading && Util.toLoadData('portfolioTime')){
            Alert.alert('Loading');
            changeHandler(new Date())
        }
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