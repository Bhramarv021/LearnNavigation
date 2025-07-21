import { NavigationContainer, StackActions } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import User from '../screens/User';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTabs = () => {
    return (
        <NavigationContainer>
            <TabNavContainer />
        </NavigationContainer>
    )
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavContainer = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{tabBarBadge: 3, tabBarIcon:(props)=><Icon name="Home" {...props}/>}} name='Home' component={HomeStack}/>
            <Tab.Screen name='Profile' component={ProfileScreen}/>
            <Tab.Screen name='User' component={User}/>
        </Tab.Navigator>
    )
}

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeSceen" component={HomeScreen} />
            <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
    )
}

export default BottomTabs; 