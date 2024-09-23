import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../global/color.js'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useState } from 'react'



const Search = ({onSearch}) => {

  const [input, setInput] = useState("")
  const [error, setError] = useState("")

  const handleInputChange = (t) => {
    setInput(t)
  }

  const handleRemoveInput = () => {
    setInput("")
    onSearch("")
    setError("")
  }

  const search = () => {

    const regex = /[^a-zA-Z0-9 ]/
    if (regex.test(input)){
      setError("Caracteres no validos")
    } else {
      setError("")
      onSearch(input)
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholderTextColor={"green"}
          placeholder='Buscar'
          value={input}
          onChangeText={handleInputChange}
        />
        <View style={styles.buttonContainer}>
          <Pressable onPress={search}>
            <FontAwesome name="search" size={40} color="black" />
          </Pressable>
          <Pressable onPress={handleRemoveInput}>
            <MaterialIcons name="cancel" size={40} color="black" />
          </Pressable>
        </View>
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    margin: 20,
    marginTop:20
  },
  containerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  input: {
    backgroundColor: colors.green2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    width: "70%",
    color:"white"
  },
  buttonContainer:{
    flexDirection:"row"
  },
  error:{
    color:"white",
    fontWeight:"bold",
    marginLeft:20,
  }
})