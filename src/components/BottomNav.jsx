import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Icons Import
import { Entypo, FontAwesome5, SimpleLineIcons ,MaterialIcons } from '@expo/vector-icons'
import { backgroundColor1, backgroundColor2, primaryColor, themeCol } from '../styles/Theme1'

const BottomNav = ({activepage,navigation}) => {

    
  return (
    <View style={styles.container}>
        {
            activepage=="player" ? <FontAwesome5 name="headphones" size={50} color="black" style={styles.iconsActive}/> :
            <FontAwesome5 name="headphones" size={50} color="black" style={styles.icons}
            onPress={()=>navigation.navigate("player")}
            /> 
        }
        {
            activepage=="allmusic" ? <Entypo name="folder-music" size={50} color="black" style={styles.iconsActive}/> :
            <Entypo name="folder-music" size={50} color="black"
            onPress={()=>navigation.navigate("allmusic")}
             style={styles.icons}/>
        }
        {
            activepage=="playlist" ? <MaterialIcons name="playlist-add" size={50} color="black" style={styles.iconsActive}/>:
            <MaterialIcons name="playlist-add" onPress={()=>navigation.navigate("playlist")} size={50} color="black" style={styles.icons}/>
        }
       
        
        
        
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    container: {
        width:"100%",
        flexDirection:"row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: backgroundColor2,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
      },
      icons:{
        color:primaryColor,
        marginHorizontal:100
      },
      iconsActive:{
        color:primaryColor,
        backgroundColor:themeCol,
        borderRadius:50,
        padding:10,
        position:"absolute",
        bottom:0,
        left:"40%"
      }
})