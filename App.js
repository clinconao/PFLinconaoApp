import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import { fonts } from "./src/global/fonts"
import Navigator from './src/navigation/Navigator.js'
import { Provider } from 'react-redux'
import { store } from './src/app/store.js'

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
      <StatusBar style="light"/>
    </>
  )
}

const styles = StyleSheet.create({})