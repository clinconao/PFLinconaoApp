import { Pressable, StyleSheet, Text, View } from 'react-native'
import ShadowWrapper from './ShadowWrapper.js'
import { colors } from '../global/color.js'
import {useNavigation} from '@react-navigation/native'


const Category = ({ item }) => {

    const navigation = useNavigation()
    
    return (
        <Pressable onPress={() =>navigation.navigate("Products",{category:item})}>
            <ShadowWrapper style={styles.container}>
                <Text style={styles.text}>{item}</Text>
            </ShadowWrapper>
        </Pressable>

    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginHorizontal: "5%",
        backgroundColor: colors.lightGray,
        marginVertical: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,

        // revisar se ve feo

    },
    text: {
        fontSize: 16
    }
})