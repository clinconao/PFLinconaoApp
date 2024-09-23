import { StyleSheet, View } from 'react-native'

const ShadowWrapper = ({ style, children }) => {
    return (
        <View style={[styles.container,style]}>
            {children}
        </View>
    )
}

export default ShadowWrapper

const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    }
})