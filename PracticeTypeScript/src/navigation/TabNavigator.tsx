import React, {useLayoutEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import WatchList from '../screens/WatchList'
import Positions from '../screens/Positions'
import Trade from '../screens/Trade'
import Orders from '../screens/Orders'
import Menu from '../screens/Menu'
import {useNavigation} from '@react-navigation/core'
import {Icon} from '@rneui/themed'

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
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#50C878',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'WatchList') {
            return (
              <Icon
                name="folder"
                type="MaterialCommunityIcons"
                color={focused ? '#50C878' : 'gray'}
              />
            )
          } else if (route.name === 'Positions') {
            return (
              <Icon
                name="shopping-bag"
                type="FontAwesome"
                color={focused ? '#50C878' : 'gray'}
              />
            )
          } else if (route.name === 'Trade') {
            return (
              <Icon
                name="swap-horiz"
                type="MaterialIcons"
                color={focused ? '#50C878' : 'gray'}
              />
            )
          } else if (route.name === 'Orders') {
            return (
              <Icon
                name="book"
                type="FontAwesome5"
                color={focused ? '#50C878' : 'gray'}
              />
            )
          } else if (route.name === 'Menu') {
            return (
              <Icon
                name="menu"
                type="Entypo"
                color={focused ? '#50C878' : 'gray'}
              />
            )
          }
        },
      })}>
      <Tab.Screen name="WatchList" component={WatchList} />
      <Tab.Screen name="Positions" component={Positions} />
      <Tab.Screen name="Trade" component={Trade} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  )
}

export default TabNavigator
