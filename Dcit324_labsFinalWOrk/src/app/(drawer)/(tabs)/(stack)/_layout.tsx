import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name="Feed" options={{headerShown: false}} />
        <Stack.Screen name="EventDetails" options={{headerShown: false}} />
    </Stack>
  )
}