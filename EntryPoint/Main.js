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
import { Provider } from 'react-redux'
import {store} from '../store/store';
import ESG from "../components/TabScreen/ESG";
import Alerts from "../components/TabScreen/Alerts";

const Stack = createNativeStackNavigator();

const Main = ()=>{

    
    return (
      <>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                contentStyle: styles.container,
              }}>
              <Stack.Screen
                name={SCREEN_NAME.homeTab}
                component={HomeTab}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name={SCREEN_NAME.pref} component={Preference} />
              <Stack.Screen name={SCREEN_NAME.alerts} component={Alerts} />
              <Stack.Screen name={SCREEN_NAME.esg} component={ESG} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </>
    );
}

////
const styles = StyleSheet.create({
  container:{
      backgroundColor:'black'
  }
})

export default Main;