import { Text,StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SCREEN_NAME from "../Util/constant";
import SideNav from "../components/SideNav";
import HeaderLeft from '../components/HeaderLeft'

const Tab = createBottomTabNavigator();

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from "../components/HomeTab";
import Preference from "../components/TabScreen/Preference";


const Stack = createNativeStackNavigator();

const Main = ()=>{

    
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: styles.container,
            }}
            >
            <Stack.Screen
              name={SCREEN_NAME.homeTab}
              component={HomeTab}
              options={{
                headerShown:false
              }}
            />
            <Stack.Screen
              name={SCREEN_NAME.pref}
              component={Preference}
            />
             <Stack.Screen
              name={SCREEN_NAME.alerts}
              component={Preference}
            />
             <Stack.Screen
              name={SCREEN_NAME.esg}
              component={Preference}
            />
          
          </Stack.Navigator>
         
        </NavigationContainer>
      </>
    );
}


const styles = StyleSheet.create({
  container:{
      backgroundColor:'black'
  }
})

export default Main;