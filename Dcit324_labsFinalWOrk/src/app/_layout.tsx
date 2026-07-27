import { Stack, Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ProfileProvider } from "../context/ProfileContext";


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ProfileProvider>
        <Stack>
          <Stack.Screen name="Welcome" options={{headerShown: false}} />
        </Stack>
      </ProfileProvider>
    </GestureHandlerRootView>
  );
}
