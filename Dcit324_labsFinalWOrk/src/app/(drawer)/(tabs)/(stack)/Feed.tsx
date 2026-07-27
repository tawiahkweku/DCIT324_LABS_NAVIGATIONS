import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

const events = [
  {
    title: "Freshers' Orientation Week",
    date: "2026-08-01",
    description: "New students are welcomed with a week of orientation activities across campus.",
  },
  {
    title: "Inter-Hall Basketball Finals",
    date: "2026-08-05",
    description: "The basketball finals will be held at the Sports Complex starting 4pm.",
  },
  {
    title: "Career Fair 2026",
    date: "2026-08-10",
    description: "Top companies visit campus to recruit students for internships and jobs.",
  },
  {
    title: "Research Symposium",
    date: "2026-08-14",
    description: "Faculty and students present ongoing research projects in the main hall.",
  },
  {
    title: "Cultural Night",
    date: "2026-08-20",
    description: "A celebration of diverse cultures with music, dance, and food from student groups.",
  },
  {
    title: "Blood Donation Drive",
    date: "2026-08-24",
    description: "The Red Cross partners with the health directorate to host a campus blood drive.",
  },
];

export default function Feed() {
  return (
    <ScrollView style={styles.container}>
      {events.map((event, index) => (
        <Link
          key={index}
          href={{
            pathname: "/(drawer)/(tabs)/(stack)/EventDetails",
            params: event,
          }}
          asChild
        >
          <Pressable style={styles.item}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.date}>{event.date}</Text>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: "gray",
    marginTop: 2,
  },
});
