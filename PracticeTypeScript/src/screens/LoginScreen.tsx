import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics'
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../navigation/RootNavigator'

const LoginScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const rnBiometrics = new ReactNativeBiometrics()

  const handleEmailLogin = async () => {
    try {
      navigation.navigate('Main')
      console.log('User logged in:')
    } catch (error) {
      // Handle login error
      console.error('Login error:', error)
      Alert.alert(
        'Error',
        'Failed to login. Please check your email and password.',
      )
    }
  }

  const handleBiometricLogin = async () => {
    try {
      rnBiometrics.isSensorAvailable().then(resultObject => {
        const {available, biometryType} = resultObject

        if (available && biometryType === BiometryTypes.TouchID) {
          console.log('TouchID is supported')
        } else if (available && biometryType === BiometryTypes.FaceID) {
          console.log('FaceID is supported')
        } else if (available && biometryType === BiometryTypes.Biometrics) {
          console.log('Biometrics is supported')
        } else {
          console.log('Biometrics not supported')
        }
      })
    } catch (error) {
      // Handle biometric authentication error
      console.error('Biometric authentication error:', error)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login with Email" onPress={handleEmailLogin} />
      <Button title="Login with Biometrics" onPress={handleBiometricLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
})

export default LoginScreen
