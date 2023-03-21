import { Image, StyleSheet, Text, View , Animated} from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomNav from '../components/BottomNav'
import { backgroundColor1, primaryColor, secondaryColor } from '../styles/Theme1'
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const Player = ({navigation}) => {
    // Initializations Or State Management

    const tempIMG = "https://i.redd.it/q21m4rckj825a1.jpg"

    const [play , setPlay] = useState(true)

    let rotation = new Animated.Value(0)
    
    // Logic Parts

    const startImageRotation = ()=>{
        rotation.setValue(0)
        Animated.timing(rotation,{
            toValue:1,
            duration:3000,
            useNativeDriver:false
        }).start(()=>startImageRotation())
    }

    useEffect(() => {
      if(play==false){
        startImageRotation()
      }else{
        rotation.setValue(0)
        rotation.stopAnimation()
      }
    }, [play])
    
    const rotateData = rotation.interpolate({
        inputRange:[0,1],
        outputRange:["0deg" ,"360deg"]
    })

    return (
        <View style={styles.container}>

            <Animated.Image source={{uri:tempIMG}} style={[styles.imgb,{transform:[{rotate:rotateData}]}]}/>
            <View style={styles.container2}>
                <Text style={styles.text1}>Heat Waves</Text>
                <Text style={styles.text2}>By: Glass Animals</Text>
            </View>

            <View style={styles.container3}>
                <View style={styles.musicCompletedOut}>
                    <View style={styles.musicCompletedIn}></View>
                </View>
                <View style={styles.timecont}>
                    <Text style={styles.time}>0:00</Text>
                    <Text style={styles.time}>2:00</Text>
                </View>
            </View>
            
            <View style={styles.conatiner4}>
                
                <MaterialIcons name="skip-previous" size={24} color="black"    style={styles.icon} />
                {
                    play ? <AntDesign name="play" size={24} color="black"   style={styles.icon} onPress={()=>{setPlay(false)}}/>:
                    <MaterialIcons name="pause-circle-filled" size={24} color="black"  style={styles.icon} onPress={()=>{setPlay(true)}}/> 
                }
                
                <MaterialCommunityIcons name="skip-next" size={24} color="black"   style={styles.icon} />    
            </View>
            <View style={styles.bottomNav}>
                <BottomNav activepage={"player"} navigation={navigation}/>
            </View>
        </View>
    )
}

export default Player

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:backgroundColor1,
        width:"100%",
        height:"100%"
    },
    bottomNav:{
        position:"absolute",
        bottom:0
    },
    imgb:{
        width:300,
        height:300,
        borderRadius:150,
        marginVertical:100,
    },
    text1:{
        color:primaryColor,
        fontSize:20,
        textAlign:"center",
        alignSelf:"center"

    },
    text2:{
        color:secondaryColor,
        fontSize:15,
        textAlign:"center",
        alignSelf:"center"
    },
     container3:{
        width:"80%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,

    },
    time:{
        fontSize:15,
        color:secondaryColor
    },
    musicCompletedOut:{
        width:"100%",
        height:5,
        backgroundColor:secondaryColor,
        borderRadius:5
    },
    musicCompletedIn:{
        width:"45%",
        height:5,
        backgroundColor:primaryColor,
        borderRadius:5
    },
    timecont:{
        width:"100%",
        flexDirection:"row",
        justifyContent:'space-between',
        marginVertical:10
    },
    conatiner4:{
        width:"70%",
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    icon:{
        color:primaryColor,
        fontSize:50
    }
})