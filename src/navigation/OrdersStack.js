import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header.js'
import Orders from '../screens/Orders.js'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {
    return (
        <Stack.Navigator
            screenOptions={(
                () => {
                    return {
                        header: () => <Header title="Ordenes" />
                    }
                }
            )}
        >
            <Stack.Screen name='Orders' component={Orders} />
        </Stack.Navigator>
    )
}

export default OrdersStack