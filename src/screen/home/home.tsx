import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Topnav from './component/topnav'
import ButtonList from './component/buttonList'
import HomeSectionList from './component/HomeSectionList'





export default function Home() {
  return (
    <View style={styles.container}>
     <View style={styles.border}>
        <Topnav />
     </View>
      <View style={[styles.border, styles.secondNav]}>
      <ButtonList /> 
     </View>
     <View>
      <HomeSectionList />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  },

  border:{
    borderRadius: 1,
    borderWidth: 1, 
    borderColor: '#E4E4E4', 
  },
  secondNav:{
    justifyContent:'center',
    alignItems:'center',
  }
});