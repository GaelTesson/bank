import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'
import HomeScreen from '../screens/HomeScreen'
import AccountScreen from '../screens/AccountScreen'
import StatScreen from '../screens/StatScreen'
import StackNavigation from './StackNavigation'
import { StyleSheet } from 'react-native'

const HomeRoute = () => <StackNavigation />
const AccountRoute = () => <AccountScreen />
const StatRoute = () => <StatScreen />

const BottomTabNavigation = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'account', title: 'Account', icon: 'card' },
    { key: 'stat', title: 'Stats', icon: 'wave' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    account: AccountRoute,
    stat: StatRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{
        backgroundColor: '#6e64e7',
        elevation: 8,
        shadowColor: '#000',
        alignSelf: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        width: '100%',


      }}

    />
  )
}

export default BottomTabNavigation

