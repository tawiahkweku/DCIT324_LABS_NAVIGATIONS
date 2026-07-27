
import { Drawer } from 'expo-router/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function _layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer >
        <Drawer.Screen name="(tabs)" options={{headerShown: false, title: 'Dashboard' }} />
        <Drawer.Screen name="Announcements" options={{ title: 'Announcements' }} />
        <Drawer.Screen name="About" options={{ title: 'About' }} />
        <Drawer.Screen name="Help" options={{ title: 'Help & Support' }} />
      </Drawer>
    </GestureHandlerRootView>
  )
}