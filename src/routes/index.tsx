import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import Pages from "../consts/Pages";
const Stack = createStackNavigator();

interface RoutesProps {}
const Routes: React.FC<RoutesProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name={Pages.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
