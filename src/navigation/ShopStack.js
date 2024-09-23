import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home.js'
import ItemListCategories from '../screens/ItemListCategories.js'
import ItemDetail from '../screens/ItemDetail.js'
import Header from '../components/Header.js'

const Stack = createNativeStackNavigator()
const ShopStack = () => {
    return (
        <Stack.Navigator
            screenOptions={(
                ({ route }) => {
                    return {
                        header: () => <Header title={
                            route.name === "Home" ?
                                "Bienvenido"
                                :
                                route.name === "Products" ?
                                    route.params.category
                                    :
                                    "Detalle del Producto"
                        } />
                    }
                }
            )}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Products' component={ItemListCategories} />
            <Stack.Screen name='Detail' component={ItemDetail} />
        </Stack.Navigator>
    )
}

export default ShopStack