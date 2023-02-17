import { Text, View } from 'react-native';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import StarMapScreen from './screens/StarMap';
import HomeScreen from './screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
        <Stack.Screen name="StarMap" component={StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

