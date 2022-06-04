import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'



const StatScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <LinearGradient colors={['#023e8a', '#0096c7']} style={styles.background} />

    </View>
  )
}

export default StatScreen

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
})