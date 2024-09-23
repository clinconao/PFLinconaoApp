import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { colors } from '../global/color'
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({product,handleProductDetailId}) => {

    const {width, height} = useWindowDimensions()
    const navigation = useNavigation()

    return (
        <Pressable style={styles.container} onPress={()=>navigation.navigate("Detail",{id:product.id})}>
            <Text style={[styles.title,width <300 ? styles.titleMin: styles.titleMax]}>{product.title}</Text>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={{uri:product.thumbnail}} //aca puede ir la ruta desde assets o una url u otro
            />
        </Pressable>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        width: "90%",
        marginHorizontal: "5%",
        gap: 80,
        borderRadius: 20,
    },
    title: {
        width: "60%"
    },
    titleMin:{
        fontSize:14
    },
    titleMax:{
        fontSize:20
    },
    image: {
        minWidth:80,
        width: "20vw",
        maxWidth:150,
        height: "20vw",        
        minHeight:80,
        maxHeight:150,
        borderRadius: 5
    }
})