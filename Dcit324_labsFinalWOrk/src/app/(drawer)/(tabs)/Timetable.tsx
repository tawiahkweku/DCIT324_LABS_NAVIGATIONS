import { ScrollView, StyleSheet, Text, View } from 'react-native'

const classes = [
  { day: 'Monday', time: '8:00am - 10:00am', course: 'DCIT324 - Mobile Application Development', venue: 'CS Lab 1' },
  { day: 'Monday', time: '2:00pm - 4:00pm', course: 'DCIT308 - Software Engineering', venue: 'JQB 12' },
  { day: 'Tuesday', time: '10:00am - 12:00pm', course: 'DCIT301 - Data Structures and Algorithms', venue: 'CS Lab 2' },
  { day: 'Wednesday', time: '8:00am - 10:00am', course: 'DCIT311 - Database Systems', venue: 'JQB 5' },
  { day: 'Thursday', time: '1:00pm - 3:00pm', course: 'DCIT315 - Computer Networks', venue: 'CS Lab 1' },
  { day: 'Friday', time: '9:00am - 11:00am', course: 'DCIT318 - Human-Computer Interaction', venue: 'JQB 8' },
]

export default function Timetable() {
  return (
    <ScrollView style={styles.container}>
      {classes.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.day}>{item.day}</Text>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.course}>{item.course}</Text>
          <Text style={styles.venue}>{item.venue}</Text>
        </View>
      ))}
    </ScrollView>
  )
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
    borderBottomColor: '#ccc',
  },
  day: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    color: 'gray',
    marginTop: 2,
  },
  course: {
    fontSize: 14,
    marginTop: 4,
  },
  venue: {
    fontSize: 14,
    marginTop: 2,
  },
})
