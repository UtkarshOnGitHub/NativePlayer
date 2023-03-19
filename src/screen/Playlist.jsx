import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from '../components/BottomNav'

export default function Playlist({navigation}) {
  return (
    <View style={styles.container}>
      <Text>All Playlist</Text>
      <View style={styles.bottomNav}>
        <BottomNav activepage={"playlist"} navigation={navigation}/>
      </View>
    </View>
  )
}

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