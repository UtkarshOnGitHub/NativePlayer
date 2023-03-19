import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import Player from './src/screen/Player';
import Playlist from './src/screen/Playlist';
import * as MediaLibrary from "expo-media-library"
import { useEffect, useState } from 'react';



const Stack = createNativeStackNavigator();


export default function App() {

  const [allSongs , setAllSongs] = useState("Permission Not Granted")
  
  const getPermission = async()=>{
    const permission = await MediaLibrary.getPermissionsAsync()

    if(permission.granted){
      getAudio()
    }
    if(permission.granted==false && permission.canAskAgain==true){
      const askPermission = await MediaLibrary.requestPermissionsAsync()

      if(askPermission.status=="denied" && askPermission.canAskAgain==true){
        console.log("Permission Denied")
      }
      if(askPermission.status=="granted"){
        getAudio()
        console.log("Done")
      }
      if(askPermission.status=="denied" && askPermission.canAskAgain==false){
        console.log("Cant Show Music")
      }
    }
  }

  useEffect(() => {
    getPermission()
  
  }, [])
  
  const getAudio = async()=>{
    const songs = await MediaLibrary.getAssetsAsync({
      mediaType:"audio"
    })
    // console.log(songs.assets)
    setAllSongs(songs.assets)
  }
  

  return (
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
