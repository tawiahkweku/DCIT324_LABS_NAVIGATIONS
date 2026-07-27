import { router, useLocalSearchParams } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function EventDetails() {
  const params = useLocalSearchParams<{ title: string; date: string; description: string }>()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.title}</Text>
      <Text style={styles.date}>{params.date}</Text>
      <Text style={styles.description}>{params.description}</Text>

      <Button title="Back" onPress={() => router.back()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  date: {
    color: 'gray',
  },
  description: {
    fontSize: 14,
    marginTop: 8,
  },
})
