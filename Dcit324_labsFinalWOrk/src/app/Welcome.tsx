import { Link } from 'expo-router'
import { Button, StyleSheet, View, Text } from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Campus Navigator</Text>
      <Link href='/Feed' push asChild>
        <Button title='Get Started'/>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
  },
})