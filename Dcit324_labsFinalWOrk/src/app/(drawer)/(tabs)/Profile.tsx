import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { useProfile } from "../../../context/ProfileContext";

export default function Profile() {
  const { profile } = useProfile();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <Text style={styles.value}>{profile.name}</Text>

      <Text style={styles.label}>Index Number</Text>
      <Text style={styles.value}>{profile.indexNumber}</Text>

      <Text style={styles.label}>Programme</Text>
      <Text style={styles.value}>{profile.programme}</Text>

      <Text style={styles.label}>Level</Text>
      <Text style={styles.value}>{profile.level}</Text>

      <Link
        href={{
          pathname: "/edit-profile",
          params: { name: profile.name, bio: profile.bio, programme: profile.programme },
        }}
        push
        asChild
      >
        <Button title="Edit Profile" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 4,
  },
  label: {
    color: "gray",
    marginTop: 12,
  },
  value: {
    fontSize: 16,
  },
});
