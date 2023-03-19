import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from '../components/BottomNav'
import * as MediaLibrary from "expo-media-library"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllSongs } from '../redux/action'



const HomeScreen = ({navigation}) => {

  const dispatch = useDispatch()
  const newA = useSelector(state=>state.new)
  console.log(newA,"New")
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
    dispatch(setAllSongs(songs))
  }

  return (
    <View style={styles.container}>
      <Text>All Music</Text>
      <View style={styles.bottomNav}>
        <BottomNav activepage={"allmusic"} navigation={navigation}/>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomNav:{
        position:"absolute",
        bottom:0
    }
})