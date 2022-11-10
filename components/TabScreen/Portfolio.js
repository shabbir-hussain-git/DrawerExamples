import React,{ useState } from "react"
import { Text ,StyleSheet,View ,Button, Alert} from "react-native"
import { useFocusEffect,useIsFocused } from '@react-navigation/native';

import Util from "../../Util/Util"



const Portfolio = ()=>{
    const [name,nameHandler] = useState('Shabbir');
    const [count,countHandler] = useState(1);
    const isFocused = useIsFocused();

    useFocusEffect(
        React.useCallback(() => {
            countHandler(prev=>{
                return  (prev+1);
            });
            const interval = setInterval(() => {
                console.log('This will run every 10 second!');
                checkLoading();
            }, 10000);

            checkLoading();
            const unsubscribe = ()=>{
                 clearInterval(interval);
            }
            return () => unsubscribe();

        }, [])
      );
    
    const checkLoading = ()=>{
        if(Util.toLoadData('portfolioTime')){
            Alert.alert('Loading')
        }
    }
    const getPortfolioData = async ()=>{
       
        nameHandler('Hussain')
        await Util.getData('services/portfolio/myPortfolio');
    }
    
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Portfolio Screen {name}-{count}</Text>
                <Button title="Click Me" onPress={getPortfolioData}/>
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