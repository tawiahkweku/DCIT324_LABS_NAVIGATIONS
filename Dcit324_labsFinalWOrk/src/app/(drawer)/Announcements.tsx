import { ScrollView, StyleSheet, Text, View } from "react-native";

const announcements = [
  {
    title: "Mid-Semester Exams Timetable Released",
    date: "2026-07-10",
    text: "Check the Timetable tab for your updated exam schedule.",
  },
  {
    title: "Library Extended Hours",
    date: "2026-07-14",
    text: "The main library will now stay open until 10pm on weekdays.",
  },
  {
    title: "Course Registration Deadline",
    date: "2026-07-18",
    text: "All students must complete course registration by end of week.",
  },
  {
    title: "Campus Wi-Fi Maintenance",
    date: "2026-07-21",
    text: "Expect brief Wi-Fi outages this weekend during network upgrades.",
  },
  {
    title: "Guest Lecture on AI",
    date: "2026-07-25",
    text: "Join us in the main auditorium for a talk on AI in education.",
  },
  {
    title: "Sports Fest Sign-Up Open",
    date: "2026-07-27",
    text: "Sign up at the sports office before Friday to join this year's fest.",
  },
];

export default function Announcements() {
  return (
    <ScrollView style={styles.container}>
      {announcements.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
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
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
  },
});
