import { Text,StyleSheet } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Portfolio from "./TabScreen/Portfolio";
import SCREEN_NAME from '../Util/constant';
import WatchList from "./TabScreen/WatchList";
import HeaderLeft from "./HeaderLeft";
import SimpleSearch from "./TabScreen/SimpleSearch";

const Tab = createBottomTabNavigator();



const HomeTab = ()=>{


    return (
      <>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            contentStyle: styles.container,
          }}>
          <Tab.Group>
            <Tab.Screen
                 options={({navigation}) => ({
                    title: SCREEN_NAME.portfolio,
                    headerLeft: () => {
                      return <HeaderLeft navigation={navigation} />;
                    },
                  })}
                name={SCREEN_NAME.portfolio}
                component={Portfolio} />
            <Tab.Screen
              options={({navigation}) => ({
                title: SCREEN_NAME.watchlist,
                headerLeft: () => {
                  return <HeaderLeft navigation={navigation} />;
                },
              })}
             name={SCREEN_NAME.watchlist} component={WatchList} />
            <Tab.Screen name={SCREEN_NAME.simpleSearch} component={SimpleSearch} />
          </Tab.Group>
        </Tab.Navigator>
      </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    }
  })
export default HomeTab;


// drawer tab done//////////code commented////hhghgh//