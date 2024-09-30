import { StyleSheet, View } from 'react-native'
import Categories from '../components/Categories.js'
import Counter from '../components/Counter.js'

const Home = () => {
    return (
        <View style={styles.container}>
            <Counter/>
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