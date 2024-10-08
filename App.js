import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import { fonts } from "./src/global/fonts"
import Navigator from './src/navigation/Navigator.js'
import { Provider } from 'react-redux'
import { store } from './src/app/store.js'
import { colors } from './src/global/color.js'
import Login from './src/screens/Login.js'
import Register from './src/screens/Register.js'
import AuthStack from './src/navigation/AuthStack.js'


export default function App() {

  const [fontLoaded] = useFonts(fonts)


  if(!fontLoaded){
    return null
  }

  return (
    <> 
    <Provider store={store}>
      <Navigator/>
      </Provider>
      <StatusBar style="light" backgroundColor={colors.lightGray}/>
    </>
  )
}

const styles = StyleSheet.create({})