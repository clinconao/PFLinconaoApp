import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/color'

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
        backgroundColor: colors.green3,
        width:"100%",
        height:80,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    },
    text: {
        fontSize:25,
        color:"white"
    },
    icon:{
        position:"absolute",
        left:20
    }
})