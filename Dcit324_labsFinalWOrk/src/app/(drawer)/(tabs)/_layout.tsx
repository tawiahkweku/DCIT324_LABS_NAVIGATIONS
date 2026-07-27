
import { Stack, Tabs } from 'expo-router'
import { DrawerToggleButton } from 'expo-router/drawer'

export default function _layout() {
  return (
    <Tabs screenOptions={{headerLeft: () => <DrawerToggleButton/>}}>
      <Tabs.Screen name="(stack)" options={{title: 'Home'}} />
      <Tabs.Screen name="Courses" options={{title: 'Courses'}} />
      <Tabs.Screen name="Profile" options={{title: 'Profile'}} />
      <Tabs.Screen name="Timetable" options={{title: 'Timetable'}} />
    </Tabs>

  )
}