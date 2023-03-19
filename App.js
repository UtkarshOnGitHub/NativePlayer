import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import Player from './src/screen/Player';
import Playlist from './src/screen/Playlist';

import { Provider } from 'react-redux';
import { Store } from './src/redux/store';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="allmusic"
            component={HomeScreen}
            options={{headerShown: false}}/>
          <Stack.Screen
            name="playlist"
            component={Playlist}
            options={{headerShown: false}}/>
          <Stack.Screen
            name="player"
            component={Player}
            options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
