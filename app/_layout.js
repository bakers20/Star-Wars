import { Drawer, Tabs } from "expo-router";
import { Platform } from "react-native";

export default function Layout() {
  if (Platform.OS === "ios") {
    return (
      <Tabs>
        <Tabs.Screen name="planets" options={{ title: "Planets" }} />
        <Tabs.Screen name="films" options={{ title: "Films" }} />
        <Tabs.Screen name="spaceships" options={{ title: "Spaceships" }} />
      </Tabs>
    );
  }

  return (
    <Drawer>
      <Drawer.Screen name="planets" options={{ title: "Planets" }} />
      <Drawer.Screen name="films" options={{ title: "Films" }} />
      <Drawer.Screen name="spaceships" options={{ title: "Spaceships" }} />
    </Drawer>
  );
}
