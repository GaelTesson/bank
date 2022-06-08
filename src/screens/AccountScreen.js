import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import GlobalContext from '../helpers/GlobalContext'
import { useContext, useEffect, useState } from 'react'
import data from '../../assets/data.json'
import CardAlex from '../components/CardAlex'






const AccountScreen = () => {
  
  const contextValue = useContext(GlobalContext)
  const { incomes,expenses } = data[contextValue.index]
  const [user, setUser] = useState(contextValue.user)
  
  incomes.sort((a,b) =>  b.date - a.date) // trie les revenus par date
  expenses.sort((a,b) =>  b.date - a.date) // trie les dépenses par date
  
  const operations = [...incomes, ...expenses].sort((a,b) =>  b.date - a.date) // trie les opérations par date

  


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <LinearGradient colors={['#4cc9f0', '#0096c7']} style={styles.background} />
  <View style={{flex:1, marginTop:80}}>
    <Text style={{color:'#fff', fontSize:22, fontWeight:'bold'}}>{user}</Text>
                <FlatList
                    user={contextValue.user}
                    data={operations}
                    renderItem={CardAlex}
                    keyExtractor={(item, index) => index}
                    ListFooterComponentStyle = {{ borderBottomLeftRadius : 8, borderBottomRightRadius : 8}}
                />
            </View>
            <View style={{flex:1, marginTop:80}}>
                <Text style={{color:'#fff', fontSize:22, fontWeight:'bold'}}>{'Total : ' + contextValue.ammount + '€'}</Text>
            </View>

    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
})