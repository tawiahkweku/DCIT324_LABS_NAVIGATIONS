import { ScrollView, StyleSheet, Text, View } from 'react-native'

const faqs = [
  {
    question: 'How do I edit my profile?',
    answer: "Go to the Welcome screen and tap 'Edit Profile' to update your name, bio, and programme.",
  },
  {
    question: 'Where can I see announcements?',
    answer: 'Open the drawer menu and select Announcements to view the latest updates.',
  },
  {
    question: 'How do I check my timetable?',
    answer: 'Tap the Timetable tab at the bottom of the screen to view your schedule.',
  },
  {
    question: 'Who do I contact for technical issues?',
    answer: 'Reach out to the DCIT324 course support team through the department office.',
  },
]

export default function Help() {
  return (
    <ScrollView style={styles.container}>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
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
  question: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  answer: {
    fontSize: 14,
  },
})
