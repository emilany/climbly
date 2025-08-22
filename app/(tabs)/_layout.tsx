import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Octicons from '@expo/vector-icons/Octicons'
import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'
import Colors from '@/utils/theme'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Climb Logs',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pickaxe" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="crags"
        options={{
          title: 'Crags',
          tabBarIcon: ({ color }) => (
            <Octicons name="milestone" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
