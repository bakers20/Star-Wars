import { Drawer, Tabs } from "expo-router";
import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const Wrapper = ({ children }) => (
    <GestureHandlerRootView style={{ flex: 1 }}>{children}</GestureHandlerRootView>
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
