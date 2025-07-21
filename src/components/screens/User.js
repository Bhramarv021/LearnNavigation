import React from "react";
import { Button, Text, View } from "react-native";

const User = ({ navigation }) => {
    return (
        <View>
            <Text> User SCREEN</Text>
            <Button onPress={()=>navigation.navigate("Profile")} title="Go to Profile" />
            <Button onPress={()=>navigation.push("User")} title="Go to User Again" />
            <Button onPress={()=>navigation.goBack()} title="Go back" />
            <Button onPress={()=>navigation.popToTop()} title="Go to topmost screen (First Screen)" />
        </View>
    )
}

export default User;