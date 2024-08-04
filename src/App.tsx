import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import Routes from "./routes";
import NavigationContainer from "expo-router/build/fork/NavigationContainer";
import Layout from "./Layout";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
