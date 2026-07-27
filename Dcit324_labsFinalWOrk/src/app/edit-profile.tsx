import { router, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useProfile } from '../context/ProfileContext'

export default function EditProfile() {
  const params = useLocalSearchParams<{ name: string; bio: string; programme: string }>()
  const { updateProfile } = useProfile()

  const [name, setName] = useState(params.name)
  const [bio, setBio] = useState(params.bio)
  const [programme, setProgramme] = useState(params.programme)

  const onSave = () => {
    updateProfile({ name, bio, programme })
    router.back()
  }

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text>Bio</Text>
      <TextInput style={styles.input} value={bio} onChangeText={setBio} />

      <Text>Programme</Text>
      <TextInput style={styles.input} value={programme} onChangeText={setProgramme} />

      <Button title="Save" onPress={onSave} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
  },
})
