import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import GlobalContext from '../helpers/GlobalContext'
import { useFocusEffect } from '@react-navigation/native'
import data from '../../assets/data.json'
import { Picker, PickerIOS } from '@react-native-picker/picker'
import { Card } from 'react-native-paper'
import UserResume from '../components/UserResume'

const HomeScreen = ({ navigation }) => {

  const contextValue = useContext(GlobalContext)

  // console.log(contextValue.user);

  const [index, setIndex] = useState({})
  const [user, setUser] = useState('')

  useEffect(() => {
    setUser(contextValue.user)
    setIndex(data[contextValue.index])
  })

  useFocusEffect(() => {
    setIndex(data[contextValue.index])
    setUser(contextValue.user)
  })

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <LinearGradient colors={['#023e8a', '#0096c7']} style={styles.background} />
      <SafeAreaView/>
      <View style={{ flex: 2 }} >
        <Picker
          prompt='Choisissez votre compte'

          selectedValue={user}
          onValueChange={(text, index) => {
            console.log(index);
            contextValue.user = text
            contextValue.index = index
            setUser(text)
            setIndex(data[index])
          }}
          nativeID="picker"
          mode='dialog'
          style={{ height: 50,
                    width: 250, 
                    backgroundColor: 'white',
                    marginTop: 60, 
                    backfaceVisibility: 'hidden', 
                    borderRadius: 15,
                      justifyContent: 'center', 
                      alignContent: 'center',
                      padding:20 }}>

          {data.map((item, index) => <Picker.Item label={item.user} value={item.user} key={index} />)}

        </Picker>
      </View>
 
      <View style={{ flex: 1 }}>
 
        <UserResume/>
    
      </View >




    
    <View style={{ flex: 1, flexDirection:'row', alignItems:'center',}}>
      <TouchableOpacity
        onPress={() =>
          navigation.push('Income')
        }>
        <LinearGradient colors={['#03045e', '#023e8a']} style={styles.button1}>
          <Text style={{ color: 'white', fontSize: 16, textAlign:'center' }}>Ajout{"\n"}Revenu</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.push('Payments')
        }>
        <LinearGradient colors={['#03045e', '#023e8a']} style={styles.button2}>
          <Text style={{ color: 'white', fontSize: 16, textAlign:'center' }}>Ajout{"\n"}Dépenses</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>

    </View >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    marginRight: 40,

  },

  button2: {
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    marginLeft: 60,
  },
  button1: {
    width: 120,
    height: 120,
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
    

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

})