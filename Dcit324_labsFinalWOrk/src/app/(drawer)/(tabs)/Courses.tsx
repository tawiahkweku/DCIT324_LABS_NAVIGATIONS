import { ScrollView, StyleSheet, Text, View } from "react-native";

const courses = [
  { code: "DCIT324", title: "Mobile Application Development", credits: 3 },
  { code: "DCIT301", title: "Data Structures and Algorithms", credits: 3 },
  { code: "DCIT308", title: "Software Engineering", credits: 3 },
  { code: "DCIT311", title: "Database Systems", credits: 3 },
  { code: "DCIT315", title: "Computer Networks", credits: 3 },
  { code: "DCIT318", title: "Human-Computer Interaction", credits: 2 },
];

export default function Courses() {
  return (
    <ScrollView style={styles.container}>
      {courses.map((course, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.code}>{course.code}</Text>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.credits}>{course.credits} credit hours</Text>
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
  item: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  code: {
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    fontSize: 14,
    marginTop: 2,
  },
  credits: {
    color: "gray",
    marginTop: 2,
  },
});
