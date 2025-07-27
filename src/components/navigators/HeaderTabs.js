import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import User from '../screens/User';

const HeaderTabs = () => {
    return (
        <NavigationContainer>
            <StackNavigatorContainer />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();
const StackNavigatorContainer = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen options={{headerBackVisible: false}} name='User' component={User} /> 
        </Stack.Navigator>
    )
}

export default HeaderTabs; 