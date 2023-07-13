import React, {useLayoutEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import WatchList from '../screens/WatchList'
import Positions from '../screens/Positions'
import Trade from '../screens/Trade'
import Orders from '../screens/Orders'
import Menu from '../screens/Menu'
import {useNavigation} from '@react-navigation/core'

export type TabStackParamList = {
  WatchList: undefined
  Positions: undefined
  Trade: undefined
  Orders: undefined
  Menu: undefined
}

const Tab = createBottomTabNavigator<TabStackParamList>()

const TabNavigator = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <Tab.Navigator>
      <Tab.Screen name="WatchList" component={WatchList} />
      <Tab.Screen name="Positions" component={Positions} />
      <Tab.Screen name="Trade" component={Trade} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  )
}

export default TabNavigator
