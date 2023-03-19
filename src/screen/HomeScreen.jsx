import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from '../components/BottomNav'




const HomeScreen = ({navigation}) => {
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