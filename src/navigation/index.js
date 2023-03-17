import { View, Text } from "react-native";
import React from "react";
import ChatScreen from "./../screens/ChatScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatsScreen from "./../screens/ChatsScreen";
import MainTabNavigator from "./MainTabNavigator";
import { Entypo } from "@expo/vector-icons";
import ContactsScreen from "./../screens/ContactsScreen";

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "whitesmoke" } }}
      >
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Contact" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
