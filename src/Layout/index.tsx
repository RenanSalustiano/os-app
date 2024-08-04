import React from "react";
import Routes from "../routes";
import { Container } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@components/Header";
import { Platform, StatusBar, SafeAreaView } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  const insets = useSafeAreaInsets();
  return (
    <Container top={StatusBar.currentHeight ?? 0}>
      <ExpoStatusBar style="auto" translucent />
      <Header />
      <Routes />
    </Container>
  );
};

export default Layout;
