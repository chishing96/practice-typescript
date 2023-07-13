import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from './src/navigation/RootNavigator'

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
