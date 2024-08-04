import React, { useEffect } from "react";
import { Text, View } from "react-native";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  useEffect(() => {
    console.log("oppened");
  }, []);
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
