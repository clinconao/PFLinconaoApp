import { StyleSheet, View } from 'react-native'
import Categories from '../components/Categories.js'

const Home = () => {
    return (
        <View style={styles.container}>
            <Categories/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        width:"100%"
    }
})