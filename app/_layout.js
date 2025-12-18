import NetInfo from "@react-native-community/netinfo";
import { Drawer, Tabs } from "expo-router";
import { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  const Wrapper = ({ children }) => (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {!isConnected && (
        <View style={styles.offlineBanner}>
          <Text style={styles.offlineText}>
            You are offline. Some Star Wars data may be unavailable.
          </Text>
        </View>
      )}
      {children}
    </GestureHandlerRootView>
  );

  if (Platform.OS === "ios") {
    return (
      <Wrapper>
        <Tabs>
          <Tabs.Screen name="planets" options={{ title: "Planets" }} />
          <Tabs.Screen name="films" options={{ title: "Films" }} />
          <Tabs.Screen name="spaceships" options={{ title: "Spaceships" }} />
        </Tabs>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Drawer>
        <Drawer.Screen name="planets" options={{ title: "Planets" }} />
        <Drawer.Screen name="films" options={{ title: "Films" }} />
        <Drawer.Screen name="spaceships" options={{ title: "Spaceships" }} />
      </Drawer>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  offlineBanner: {
    backgroundColor: "#b00020",
    padding: 10,
    alignItems: "center",
  },
  offlineText: {
    color: "white",
    fontWeight: "bold",
  },
});

