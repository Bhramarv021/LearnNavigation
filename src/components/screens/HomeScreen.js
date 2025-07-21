import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>HOME SCREEN</Text>
            <Button onPress={()=>navigation.navigate("Profile")} title="Go to Profile" />
            <Button onPress={()=>navigation.navigate("User")} title="Go to User" />
        </View>
    )
}

export default HomeScreen;