
import { Text ,StyleSheet,View,Button} from "react-native"
import { useFocusEffect,useIsFocused } from '@react-navigation/native';
import React,{useState} from 'react'


const ESG = ()=>{

    const [count,countHandler] = useState(1);

    useFocusEffect(
        React.useCallback(() => {
            countHandler(prev=>{
                return  (prev+1);
            });
            const interval = setInterval(() => {
                console.log('This will run every 10 ESG second!');
              }, 10000);

            const unsubscribe = ()=>{
                 clearInterval(interval);
            }
            return () => unsubscribe();

        }, [])
      );
    
      const getPortfolioData = async ()=>{
       
        countHandler(prev=>{
            return  (prev+1);
        });
    }
 
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.textStyle}>ESG Screen + {count}</Text>
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
export default ESG;